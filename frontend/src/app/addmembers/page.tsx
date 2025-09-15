"use client";

import { useState, useEffect } from "react";
import { Metadata } from "next";
import { User, Key, Upload, CheckCircle, AlertCircle, X } from "lucide-react";

// This page is not linked from navigation - admin access only
export default function AddMembersPage() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'single' | 'csv'>('single');
  const [notifications, setNotifications] = useState<Array<{id: string, type: 'success' | 'error', message: string}>>([]);

  // Single member form state
  const [singleForm, setSingleForm] = useState({
    name: '',
    email: '',
    apiKeyId: '',
    apiSecretPlain: '',
  });

  // CSV form state
  const [csvData, setCsvData] = useState('');
  const [csvPreview, setCsvPreview] = useState<any>(null);
  const [isProcessingCsv, setIsProcessingCsv] = useState(false);

  useEffect(() => {
    // Initialize Netlify Identity
    const initIdentity = async () => {
      if (typeof window !== 'undefined') {
        const netlifyIdentity = (await import('netlify-identity-widget')).default;
        
        netlifyIdentity.init();
        
        // Check if user is logged in
        const currentUser = netlifyIdentity.currentUser();
        if (currentUser) {
          setUser(currentUser);
        } else {
          // Redirect to login
          netlifyIdentity.open();
        }

        // Listen for login events
        netlifyIdentity.on('login', (user) => {
          setUser(user);
          netlifyIdentity.close();
        });

        netlifyIdentity.on('logout', () => {
          setUser(null);
        });

        setIsLoading(false);
      }
    };

    initIdentity();
  }, []);

  const addNotification = (type: 'success' | 'error', message: string) => {
    const id = Date.now().toString();
    setNotifications(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const handleSingleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!singleForm.name || !singleForm.apiKeyId || !singleForm.apiSecretPlain) {
      addNotification('error', 'Name, API Key ID, and API Secret are required');
      return;
    }

    try {
      // Create/update user
      const userResponse = await fetch('/api/admin/upsert-member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: singleForm.name,
          email: singleForm.email || undefined,
        }),
      });

      if (!userResponse.ok) {
        const error = await userResponse.json();
        throw new Error(error.error || 'Failed to create user');
      }

      const { userId } = await userResponse.json();

      // Attach API key
      const keyResponse = await fetch('/api/admin/attach-key', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          apiKeyId: singleForm.apiKeyId,
          apiSecretPlain: singleForm.apiSecretPlain,
        }),
      });

      if (!keyResponse.ok) {
        const error = await keyResponse.json();
        throw new Error(error.error || 'Failed to attach API key');
      }

      addNotification('success', `Successfully added member: ${singleForm.name}`);
      setSingleForm({ name: '', email: '', apiKeyId: '', apiSecretPlain: '' });

    } catch (error) {
      addNotification('error', error instanceof Error ? error.message : 'Unknown error');
    }
  };

  const handleCsvPreview = async () => {
    if (!csvData.trim()) {
      addNotification('error', 'Please enter CSV data');
      return;
    }

    try {
      const response = await fetch('/api/admin/import-csv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          csvData: csvData.trim(),
          dryRun: true,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to preview CSV');
      }

      const preview = await response.json();
      setCsvPreview(preview);

    } catch (error) {
      addNotification('error', error instanceof Error ? error.message : 'Unknown error');
    }
  };

  const handleCsvImport = async () => {
    if (!csvPreview) {
      addNotification('error', 'Please preview CSV first');
      return;
    }

    setIsProcessingCsv(true);
    try {
      const response = await fetch('/api/admin/import-csv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          csvData: csvData.trim(),
          dryRun: false,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to import CSV');
      }

      const result = await response.json();
      addNotification('success', `CSV import completed: ${result.inserted} inserted, ${result.updated} updated, ${result.rejected} rejected`);
      setCsvData('');
      setCsvPreview(null);

    } catch (error) {
      addNotification('error', error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setIsProcessingCsv(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto mb-4"></div>
          <p className="text-secondary">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-primary mb-4">Authentication Required</h1>
          <p className="text-secondary">Please log in to access the admin panel.</p>
        </div>
      </div>
    );
  }

  // Check if user has admin role
  const isAdmin = user.app_metadata?.roles?.includes('admin');
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-primary mb-4">Access Denied</h1>
          <p className="text-secondary">You do not have admin privileges.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">
            Add Members
          </h1>
          <p className="text-secondary">
            Manage TigerQuant members and their Alpaca paper trading credentials.
          </p>
        </div>

        {/* Admin Help Box */}
        <div className="bg-elevated rounded-lg p-6 mb-8 border-l-4 border-gold">
          <h3 className="text-lg font-heading font-semibold text-gold mb-3">Admin Guidelines</h3>
          <ul className="text-secondary text-sm space-y-2">
            <li>• <strong>Paper Trading Only:</strong> Only accept Alpaca paper trading API keys (starts with PK)</li>
            <li>• <strong>Encrypted Storage:</strong> API secrets are encrypted and never stored in plaintext</li>
            <li>• <strong>Security:</strong> Keys are never shown again after initial entry</li>
            <li>• <strong>Rotation:</strong> Members can update their keys through this interface</li>
          </ul>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 bg-elevated rounded-lg p-1">
          <button
            onClick={() => setActiveTab('single')}
            className={`flex-1 flex items-center justify-center px-4 py-3 rounded-md font-medium transition-colors ${
              activeTab === 'single'
                ? 'bg-gold text-black'
                : 'text-secondary hover:text-primary'
            }`}
          >
            <User className="w-5 h-5 mr-2" />
            Add Single Member
          </button>
          <button
            onClick={() => setActiveTab('csv')}
            className={`flex-1 flex items-center justify-center px-4 py-3 rounded-md font-medium transition-colors ${
              activeTab === 'csv'
                ? 'bg-gold text-black'
                : 'text-secondary hover:text-primary'
            }`}
          >
            <Upload className="w-5 h-5 mr-2" />
            CSV Import
          </button>
        </div>

        {/* Single Member Form */}
        {activeTab === 'single' && (
          <div className="bg-elevated rounded-lg p-8">
            <h2 className="text-2xl font-heading font-semibold text-primary mb-6">
              Add Single Member
            </h2>
            <form onSubmit={handleSingleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={singleForm.name}
                    onChange={(e) => setSingleForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-surface border border-subtle rounded-lg text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Enter member name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={singleForm.email}
                    onChange={(e) => setSingleForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-surface border border-subtle rounded-lg text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Enter email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="apiKeyId" className="block text-sm font-medium text-primary mb-2">
                    Alpaca API Key ID *
                  </label>
                  <input
                    type="text"
                    id="apiKeyId"
                    required
                    value={singleForm.apiKeyId}
                    onChange={(e) => setSingleForm(prev => ({ ...prev, apiKeyId: e.target.value }))}
                    className="w-full px-4 py-3 bg-surface border border-subtle rounded-lg text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="PKTEST1234567890"
                  />
                  <p className="text-xs text-secondary mt-1">Must start with PK (paper trading only)</p>
                </div>
                <div>
                  <label htmlFor="apiSecretPlain" className="block text-sm font-medium text-primary mb-2">
                    Alpaca API Secret *
                  </label>
                  <input
                    type="password"
                    id="apiSecretPlain"
                    required
                    value={singleForm.apiSecretPlain}
                    onChange={(e) => setSingleForm(prev => ({ ...prev, apiSecretPlain: e.target.value }))}
                    className="w-full px-4 py-3 bg-surface border border-subtle rounded-lg text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Enter API secret"
                  />
                  <p className="text-xs text-secondary mt-1">Will be encrypted and stored securely</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-black font-semibold py-3 px-6 rounded-lg hover:bg-gold-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-elevated"
              >
                <Key className="w-5 h-5 mr-2 inline" />
                Add Member
              </button>
            </form>
          </div>
        )}

        {/* CSV Import Form */}
        {activeTab === 'csv' && (
          <div className="bg-elevated rounded-lg p-8">
            <h2 className="text-2xl font-heading font-semibold text-primary mb-6">
              CSV Import
            </h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="csvData" className="block text-sm font-medium text-primary mb-2">
                  CSV Data
                </label>
                <textarea
                  id="csvData"
                  rows={10}
                  value={csvData}
                  onChange={(e) => setCsvData(e.target.value)}
                  className="w-full px-4 py-3 bg-surface border border-subtle rounded-lg text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-mono text-sm"
                  placeholder="name,email,apikeyid,apisecretplain&#10;John Doe,john@example.com,PKTEST1234567890,secret123&#10;Jane Smith,jane@example.com,PKTEST2345678901,secret456"
                />
                <p className="text-xs text-secondary mt-1">
                  Required columns: name, apikeyid, apisecretplain. Optional: email
                </p>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleCsvPreview}
                  className="flex-1 bg-surface text-primary font-semibold py-3 px-6 rounded-lg border border-subtle hover:bg-gold hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-elevated"
                >
                  Preview CSV
                </button>
                {csvPreview && (
                  <button
                    onClick={handleCsvImport}
                    disabled={isProcessingCsv}
                    className="flex-1 bg-gold text-black font-semibold py-3 px-6 rounded-lg hover:bg-gold-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-elevated disabled:opacity-50"
                  >
                    {isProcessingCsv ? 'Importing...' : 'Import CSV'}
                  </button>
                )}
              </div>

              {/* CSV Preview */}
              {csvPreview && (
                <div className="bg-surface rounded-lg p-6">
                  <h3 className="text-lg font-heading font-semibold text-primary mb-4">
                    Import Preview
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-secondary">Total Rows:</p>
                      <p className="text-primary font-semibold">{csvPreview.totalRows}</p>
                    </div>
                    <div>
                      <p className="text-secondary">Valid Rows:</p>
                      <p className="text-primary font-semibold">{csvPreview.validRows}</p>
                    </div>
                    <div>
                      <p className="text-secondary">Errors:</p>
                      <p className="text-primary font-semibold">{csvPreview.errors.length}</p>
                    </div>
                    <div>
                      <p className="text-secondary">Preview:</p>
                      <p className="text-primary font-semibold">{csvPreview.preview?.length || 0} rows</p>
                    </div>
                  </div>
                  
                  {csvPreview.errors.length > 0 && (
                    <div className="mt-4">
                      <p className="text-secondary text-sm mb-2">Errors:</p>
                      <ul className="text-red-400 text-sm space-y-1">
                        {csvPreview.errors.map((error: string, index: number) => (
                          <li key={index}>• {error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Notifications */}
        <div className="fixed top-4 right-4 space-y-2 z-50">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-center p-4 rounded-lg shadow-lg max-w-sm ${
                notification.type === 'success' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-red-600 text-white'
              }`}
            >
              {notification.type === 'success' ? (
                <CheckCircle className="w-5 h-5 mr-3" />
              ) : (
                <AlertCircle className="w-5 h-5 mr-3" />
              )}
              <span className="flex-1">{notification.message}</span>
              <button
                onClick={() => removeNotification(notification.id)}
                className="ml-3 hover:opacity-75"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

