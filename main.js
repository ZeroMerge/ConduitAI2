// Conduit AI - Premium JavaScript Engine
// Advanced AI capabilities, simulation engine, and premium interactions

class ConduitAI {
    constructor() {
        this.currentUser = null;
        this.workflows = [];
        this.connections = [];
        this.executionHistory = [];
        this.chatHistory = [];
        this.nlpProcessor = new NLPProcessor();
        this.simulationEngine = new SimulationEngine();
        this.analytics = new AnalyticsEngine();
        this.init();
    }

    init() {
        this.loadUserSession();
        this.setupEventListeners();
        this.initializeAnimations();
        this.loadMockData();
        this.initializeAI();
    }

    // Advanced Session Management
    loadUserSession() {
        const session = localStorage.getItem('conduitSession');
        if (session) {
            this.currentUser = JSON.parse(session);
        }
    }

    saveUserSession(userData) {
        this.currentUser = userData;
        localStorage.setItem('conduitSession', JSON.stringify(userData));
        this.updateUserPreferences();
    }

    clearSession() {
        localStorage.removeItem('conduitSession');
        localStorage.removeItem('conduitWorkflows');
        localStorage.removeItem('conduitHistory');
        this.currentUser = null;
    }

    // Enhanced Mock Data Generation
    loadMockData() {
        // Enhanced connected apps with realistic data
        this.connections = [
            { 
                id: 1, 
                name: 'Gmail', 
                status: 'connected', 
                icon: '📧', 
                category: 'email',
                lastSync: new Date(Date.now() - 3600000),
                health: 98,
                permissions: ['read', 'write', 'send']
            },
            { 
                id: 2, 
                name: 'Slack', 
                status: 'connected', 
                icon: '💬', 
                category: 'communication',
                lastSync: new Date(Date.now() - 1800000),
                health: 95,
                permissions: ['read', 'write']
            },
            { 
                id: 3, 
                name: 'Trello', 
                status: 'connected', 
                icon: '📋', 
                category: 'productivity',
                lastSync: new Date(Date.now() - 7200000),
                health: 92,
                permissions: ['read', 'write', 'manage']
            },
            { 
                id: 4, 
                name: 'Google Calendar', 
                status: 'connected', 
                icon: '📅', 
                category: 'calendar',
                lastSync: new Date(Date.now() - 900000),
                health: 99,
                permissions: ['read', 'write']
            },
            { 
                id: 5, 
                name: 'HubSpot', 
                status: 'connected', 
                icon: '🎯', 
                category: 'crm',
                lastSync: new Date(Date.now() - 2700000),
                health: 89,
                permissions: ['read', 'write', 'admin']
            },
            { 
                id: 6, 
                name: 'Zoom', 
                status: 'disconnected', 
                icon: '📹', 
                category: 'video',
                lastSync: null,
                health: 0,
                permissions: []
            },
            { 
                id: 7, 
                name: 'Dropbox', 
                status: 'disconnected', 
                icon: '☁️', 
                category: 'storage',
                lastSync: null,
                health: 0,
                permissions: []
            },
            { 
                id: 8, 
                name: 'Notion', 
                status: 'disconnected', 
                icon: '📝', 
                category: 'productivity',
                lastSync: null,
                health: 0,
                permissions: []
            }
        ];

        // Enhanced workflows with detailed configurations
        this.workflows = [
            { 
                id: 1, 
                name: 'Client Welcome Email', 
                enabled: true, 
                trigger: { 
                    app: 'HubSpot', 
                    event: 'new_client_booked',
                    conditions: ['client_type = new', 'status = active']
                },
                actions: [
                    { 
                        app: 'Gmail', 
                        action: 'send_email',
                        template: 'welcome_new_client',
                        delay: 0
                    },
                    {
                        app: 'Slack',
                        action: 'send_notification',
                        channel: '#sales',
                        message: 'New client onboarded: {client_name}'
                    }
                ],
                runs: 12,
                lastRun: new Date(Date.now() - 7200000),
                successRate: 100,
                averageDuration: '1.2s'
            },
            { 
                id: 2, 
                name: 'Meeting Notes Distribution', 
                enabled: true, 
                trigger: { 
                    app: 'Google Calendar', 
                    event: 'meeting_ended',
                    conditions: ['has_notes = true']
                },
                actions: [
                    {
                        app: 'Slack',
                        action: 'post_message',
                        channel: '#meetings',
                        template: 'meeting_notes'
                    },
                    {
                        app: 'Trello',
                        action: 'create_card',
                        board: 'Meeting Notes',
                        list: 'Recent'
                    }
                ],
                runs: 8,
                lastRun: new Date(Date.now() - 86400000),
                successRate: 87.5,
                averageDuration: '2.1s'
            },
            { 
                id: 3, 
                name: 'Lead Qualification', 
                enabled: false, 
                trigger: { 
                    app: 'Gmail', 
                    event: 'form_submitted',
                    conditions: ['form_type = contact']
                },
                actions: [
                    {
                        app: 'HubSpot',
                        action: 'create_contact',
                        pipeline: 'New Leads'
                    },
                    {
                        app: 'Slack',
                        action: 'notify_sales',
                        priority: 'high'
                    }
                ],
                runs: 0,
                lastRun: null,
                successRate: 0,
                averageDuration: '0s'
            },
            { 
                id: 4, 
                name: 'Project Task Creation', 
                enabled: true, 
                trigger: { 
                    app: 'HubSpot', 
                    event: 'deal_won',
                    conditions: ['deal_value > 5000']
                },
                actions: [
                    {
                        app: 'Trello',
                        action: 'create_board',
                        template: 'client_project'
                    },
                    {
                        app: 'Slack',
                        action: 'create_channel',
                        name: 'project-{client_name}'
                    },
                    {
                        app: 'Google Calendar',
                        action: 'schedule_kickoff',
                        days_from_now: 3
                    }
                ],
                runs: 25,
                lastRun: new Date(Date.now() - 1800000),
                successRate: 96,
                averageDuration: '3.4s'
            }
        ];

        // Enhanced execution history with detailed logs
        this.executionHistory = [
            { 
                id: 1, 
                workflowId: 1, 
                workflowName: 'Client Welcome Email',
                status: 'success', 
                timestamp: new Date(Date.now() - 7200000),
                duration: '1.2s',
                triggerData: {
                    client_name: 'Acme Corp',
                    client_email: 'contact@acme.com',
                    deal_value: 15000
                },
                steps: [
                    { 
                        step: 'Trigger: New client detected in HubSpot', 
                        status: 'success',
                        duration: '0.1s',
                        details: 'Client ID: 12345'
                    },
                    { 
                        step: 'Extract client details', 
                        status: 'success',
                        duration: '0.2s',
                        details: 'Name: Acme Corp, Email: contact@acme.com'
                    },
                    { 
                        step: 'Generate welcome email from template', 
                        status: 'success',
                        duration: '0.3s',
                        details: 'Template: welcome_new_client_v2'
                    },
                    { 
                        step: 'Send email via Gmail', 
                        status: 'success',
                        duration: '0.6s',
                        details: 'Message ID: msg_abc123'
                    },
                    {
                        step: 'Send Slack notification to #sales',
                        status: 'success',
                        duration: '0.2s',
                        details: 'Posted notification about new client'
                    }
                ],
                performance: {
                    memory_usage: '2.1MB',
                    api_calls: 4,
                    retries: 0
                }
            },
            { 
                id: 2, 
                workflowId: 4, 
                workflowName: 'Project Task Creation',
                status: 'success', 
                timestamp: new Date(Date.now() - 1800000),
                duration: '3.4s',
                triggerData: {
                    client_name: 'TechStart Inc',
                    deal_value: 75000,
                    project_type: 'web_development'
                },
                steps: [
                    { 
                        step: 'Trigger: Deal won in HubSpot', 
                        status: 'success',
                        duration: '0.1s',
                        details: 'Deal ID: deal_789'
                    },
                    { 
                        step: 'Create Trello board from template', 
                        status: 'success',
                        duration: '1.2s',
                        details: 'Board: TechStart Inc - Web Development'
                    },
                    { 
                        step: 'Create Slack channel', 
                        status: 'success',
                        duration: '0.8s',
                        details: 'Channel: #project-techstart'
                    },
                    { 
                        step: 'Schedule kickoff meeting', 
                        status: 'success',
                        duration: '1.3s',
                        details: 'Meeting scheduled for 3 days from now'
                    }
                ],
                performance: {
                    memory_usage: '3.2MB',
                    api_calls: 7,
                    retries: 0
                }
            },
            { 
                id: 3, 
                workflowId: 2, 
                workflowName: 'Meeting Notes Distribution',
                status: 'failed', 
                timestamp: new Date(Date.now() - 86400000),
                duration: '2.1s',
                triggerData: {
                    meeting_title: 'Q4 Planning Session',
                    meeting_duration: 90,
                    participant_count: 8
                },
                steps: [
                    { 
                        step: 'Trigger: Meeting ended in Google Calendar', 
                        status: 'success',
                        duration: '0.1s',
                        details: 'Meeting ID: meet_456'
                    },
                    { 
                        step: 'Extract meeting notes from recording', 
                        status: 'success',
                        duration: '1.2s',
                        details: 'Extracted 15 key points'
                    },
                    { 
                        step: 'Format notes for Slack', 
                        status: 'success',
                        duration: '0.3s',
                        details: 'Formatted with bullet points and action items'
                    },
                    { 
                        step: 'Post to Slack channel #meetings', 
                        status: 'failed',
                        duration: '0.5s',
                        error: 'Authentication expired. Please reconnect Slack.',
                        retry_count: 2
                    },
                    {
                        step: 'Create Trello card as fallback',
                        status: 'success',
                        duration: '0.4s',
                        details: 'Created card in Meeting Notes board'
                    }
                ],
                performance: {
                    memory_usage: '1.8MB',
                    api_calls: 5,
                    retries: 2
                },
                error: {
                    code: 'SLACK_AUTH_ERROR',
                    message: 'Authentication token expired',
                    suggestion: 'Please reconnect your Slack account in App Connections'
                }
            }
        ];

        // Save data to localStorage
        this.persistData();
    }

    // Data persistence
    persistData() {
        localStorage.setItem('conduitWorkflows', JSON.stringify(this.workflows));
        localStorage.setItem('conduitHistory', JSON.stringify(this.executionHistory));
        localStorage.setItem('conduitConnections', JSON.stringify(this.connections));
    }

    // Advanced Event Listeners
    setupEventListeners() {
        // Navigation
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-navigate]')) {
                e.preventDefault();
                const page = e.target.getAttribute('data-navigate');
                this.navigateTo(page);
            }

            if (e.target.matches('[data-action]')) {
                e.preventDefault();
                const action = e.target.getAttribute('data-action');
                this.handleAction(action, e.target);
            }

            if (e.target.matches('[data-connect]')) {
                e.preventDefault();
                const appId = e.target.getAttribute('data-connect');
                this.connectApp(appId);
            }

            if (e.target.matches('[data-disconnect]')) {
                e.preventDefault();
                const appId = e.target.getAttribute('data-disconnect');
                this.disconnectApp(appId);
            }
        });

        // Form submissions
        document.addEventListener('submit', (e) => {
            if (e.target.matches('#workflow-chat-form')) {
                e.preventDefault();
                this.handleWorkflowChat(e.target);
            }
            if (e.target.matches('#login-form')) {
                e.preventDefault();
                this.handleLogin(e.target);
            }
            if (e.target.matches('#app-connection-form')) {
                e.preventDefault();
                this.handleAppConnection(e.target);
            }
        });

        // Toggle switches
        document.addEventListener('change', (e) => {
            if (e.target.matches('.workflow-toggle')) {
                this.toggleWorkflow(e.target);
            }
        });

        // Real-time search
        document.addEventListener('input', (e) => {
            if (e.target.matches('#app-search')) {
                this.searchApps(e.target.value);
            }
            if (e.target.matches('#workflow-search')) {
                this.searchWorkflows(e.target.value);
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 'k':
                        e.preventDefault();
                        this.focusSearch();
                        break;
                    case 'n':
                        e.preventDefault();
                        this.navigateTo('workflow-builder');
                        break;
                }
            }
        });
    }

    // Advanced Navigation
    navigateTo(page) {
        if (page === 'dashboard' && !this.currentUser) {
            this.showLoginModal();
            return;
        }
        
        // Add page transition animation
        this.animatePageTransition(() => {
            window.location.href = page === 'home' ? 'index.html' : `${page}.html`;
        });
    }

    animatePageTransition(callback) {
        anime({
            targets: 'body',
            opacity: [1, 0],
            duration: 200,
            easing: 'easeOutQuart',
            complete: callback
        });
    }

    // Enhanced Action Handlers
    handleAction(action, element) {
        switch (action) {
            case 'get-started':
                this.startSession();
                break;
            case 'show-demo':
                this.showDemoSimulation();
                break;
            case 'show-login':
                this.showLoginModal();
                break;
            case 'logout':
                this.logout();
                break;
            case 'connect-app':
                this.showConnectionModal(element.dataset.appId);
                break;
            case 'test-workflow':
                this.testWorkflow(element.dataset.workflowId);
                break;
            case 'save-workflow':
                this.saveWorkflow(element.dataset.workflowData);
                break;
            case 'clear-workflow':
                this.clearWorkflowBuilder();
                break;
            case 'run-simulation':
                this.runSimulation(element.dataset.workflowId);
                break;
            case 'export-data':
                this.exportData(element.dataset.exportType);
                break;
            default:
                this.showComingSoon();
        }
    }

    // Advanced Workflow Builder
    handleWorkflowChat(form) {
        const input = form.querySelector('input[name="message"]');
        const message = input.value.trim();
        if (!message) return;

        this.addChatMessage(message, 'user');
        input.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        // Process with AI
        setTimeout(() => {
            this.processWorkflowMessage(message);
        }, 1500);
    }

    processWorkflowMessage(message) {
        this.hideTypingIndicator();
        
        // Use advanced NLP processor
        const analysis = this.nlpProcessor.analyzeIntent(message);
        const workflow = this.nlpProcessor.buildWorkflow(message, analysis);
        
        // Add AI response with personality
        const response = this.generateAIResponse(analysis, workflow);
        this.addChatMessage(response, 'ai');
        
        // Update workflow diagram with animation
        this.updateWorkflowDiagram(workflow);
        
        // Store in chat history
        this.chatHistory.push({
            userMessage: message,
            aiResponse: response,
            workflow: workflow,
            timestamp: new Date()
        });
    }

    generateAIResponse(analysis, workflow) {
        const responses = {
            'client_welcome': [
                "Perfect! I'll create a comprehensive client welcome workflow that automatically sends personalized emails and notifies your team.",
                "Excellent choice! This workflow will help you make great first impressions with new clients.",
                "Great! I'll set up an automated system to welcome new clients and keep your team informed."
            ],
            'meeting_notes': [
                "Smart thinking! I'll create a workflow that captures meeting notes and distributes them to your team automatically.",
                "Perfect for keeping everyone aligned! This will ensure no important details get missed.",
                "Excellent! I'll build a system to streamline your meeting follow-ups."
            ],
            'lead_qualification': [
                "Strategic approach! This will help you qualify leads faster and improve conversion rates.",
                "Great for sales efficiency! I'll create a workflow that captures and qualifies leads automatically.",
                "Perfect! This will streamline your lead management process."
            ]
        };

        const category = analysis.category || 'general';
        const categoryResponses = responses[category] || responses['general'];
        const randomResponse = categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
        
        return randomResponse;
    }

    // Advanced Workflow Simulation
    runSimulation(workflowId) {
        const workflow = this.workflows.find(w => w.id == workflowId);
        if (!workflow) return;

        this.showSimulationModal(workflow);
        this.simulationEngine.runWorkflow(workflow, (progress, step, result) => {
            this.updateSimulationProgress(progress, step, result);
        });
    }

    // AI Initialization
    initializeAI() {
        this.nlpProcessor.initialize();
        this.simulationEngine.initialize();
        this.analytics.initialize();
    }

    // Premium Animations
    initializeAnimations() {
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupLoadingAnimations();
        this.setupParticleEffects();
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElementIn(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    animateElementIn(element) {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            easing: 'easeOutQuart',
            delay: Math.random() * 200
        });
    }

    setupParticleEffects() {
        // Initialize Pixi.js particle system for hero background
        if (typeof PIXI !== 'undefined' && document.querySelector('.hero-particles')) {
            this.initializeParticleSystem();
        }
    }

    // Utility Functions
    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        anime({
            targets: toast,
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 300,
            complete: () => {
                setTimeout(() => {
                    anime({
                        targets: toast,
                        translateY: [0, -50],
                        opacity: [1, 0],
                        duration: 300,
                        complete: () => toast.remove()
                    });
                }, 4000);
            }
        });
    }

    formatDate(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        
        if (diff < 60000) return 'Just now';
        if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
        if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
        if (diff < 604800000) return `${Math.floor(diff / 86400000)}d ago`;
        
        return date.toLocaleDateString();
    }

    // Analytics and Tracking
    trackEvent(eventName, properties = {}) {
        this.analytics.track(eventName, {
            ...properties,
            timestamp: new Date(),
            userId: this.currentUser?.id,
            page: window.location.pathname
        });
    }
}

// Advanced NLP Processor
class NLPProcessor {
    constructor() {
        this.intents = {
            'client_welcome': [
                'client', 'welcome', 'email', 'new customer', 'onboard'
            ],
            'meeting_notes': [
                'meeting', 'notes', 'slack', 'follow up', 'action items'
            ],
            'lead_qualification': [
                'lead', 'form', 'contact', 'crm', 'qualif'
            ],
            'project_management': [
                'project', 'task', 'trello', 'manage', 'organize'
            ]
        };
    }

    initialize() {
        // Initialize NLP models and processing
        console.log('NLP Processor initialized');
    }

    analyzeIntent(message) {
        const lowerMessage = message.toLowerCase();
        let maxScore = 0;
        let detectedIntent = 'general';

        for (const [intent, keywords] of Object.entries(this.intents)) {
            const score = keywords.reduce((acc, keyword) => {
                return acc + (lowerMessage.includes(keyword) ? 1 : 0);
            }, 0);

            if (score > maxScore) {
                maxScore = score;
                detectedIntent = intent;
            }
        }

        return {
            category: detectedIntent,
            confidence: Math.min(maxScore / 3, 1),
            keywords: this.extractKeywords(message)
        };
    }

    extractKeywords(message) {
        // Extract key entities from message
        const words = message.toLowerCase().split(' ');
        return words.filter(word => word.length > 3);
    }

    buildWorkflow(message, analysis) {
        // Build workflow based on analysis
        const workflows = {
            'client_welcome': {
                name: 'Client Welcome Automation',
                description: 'Automatically welcome new clients via email',
                steps: ['New Client Detected', 'Extract Client Info', 'Send Welcome Email', 'Notify Team'],
                apps: ['HubSpot', 'Gmail', 'Slack']
            },
            'meeting_notes': {
                name: 'Meeting Notes Distribution',
                description: 'Extract and distribute meeting notes automatically',
                steps: ['Meeting Ends', 'Extract Notes', 'Format Content', 'Distribute to Team'],
                apps: ['Google Calendar', 'Slack', 'Trello']
            }
        };

        return workflows[analysis.category] || {
            name: 'Custom Workflow',
            description: 'Custom automation based on your requirements',
            steps: ['Trigger Event', 'Process Data', 'Execute Action'],
            apps: ['Various Apps']
        };
    }
}

// Simulation Engine
class SimulationEngine {
    constructor() {
        this.isRunning = false;
        this.currentWorkflow = null;
    }

    initialize() {
        console.log('Simulation Engine initialized');
    }

    runWorkflow(workflow, progressCallback) {
        this.isRunning = true;
        this.currentWorkflow = workflow;
        
        const steps = workflow.steps || workflow.actions || [];
        let currentStep = 0;

        const runNextStep = () => {
            if (currentStep >= steps.length) {
                this.isRunning = false;
                progressCallback(100, null, { status: 'completed' });
                return;
            }

            const step = steps[currentStep];
            const progress = ((currentStep + 1) / steps.length) * 100;
            
            // Simulate step execution
            setTimeout(() => {
                const result = {
                    step: step.name || step.step || `Step ${currentStep + 1}`,
                    status: Math.random() > 0.1 ? 'success' : 'failed',
                    duration: `${(Math.random() * 2 + 0.1).toFixed(1)}s`
                };

                progressCallback(progress, step, result);
                currentStep++;
                runNextStep();
            }, Math.random() * 1000 + 500);
        };

        runNextStep();
    }
}

// Analytics Engine
class AnalyticsEngine {
    constructor() {
        this.events = [];
        this.sessionData = {};
    }

    initialize() {
        console.log('Analytics Engine initialized');
    }

    track(eventName, properties) {
        this.events.push({
            event: eventName,
            properties: properties,
            timestamp: new Date()
        });

        // Persist analytics data
        localStorage.setItem('conduitAnalytics', JSON.stringify(this.events));
    }

    getMetrics() {
        return {
            totalWorkflows: this.events.filter(e => e.event === 'workflow_created').length,
            totalExecutions: this.events.filter(e => e.event === 'workflow_executed').length,
            activeConnections: this.events.filter(e => e.event === 'app_connected').length,
            sessionDuration: this.calculateSessionDuration()
        };
    }

    calculateSessionDuration() {
        const sessionStart = this.events.find(e => e.event === 'session_started');
        if (sessionStart) {
            return new Date() - sessionStart.timestamp;
        }
        return 0;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.conduitAI = new ConduitAI();
    
    // Track session start
    if (window.conduitAI.analytics) {
        window.conduitAI.analytics.track('session_started', {
            userAgent: navigator.userAgent,
            viewport: `${window.innerWidth}x${window.innerHeight}`
        });
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ConduitAI, NLPProcessor, SimulationEngine, AnalyticsEngine };
}