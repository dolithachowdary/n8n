# n8n Automation & AI Agents Portfolio

A collection of automation workflows and AI-powered agents built using **n8n**, **OpenAI**, **Google Workspace APIs**, **Telegram**, and **LLMs**. These projects demonstrate workflow automation, AI agents, tool usage, memory integration, multi-agent orchestration, and business process automation.

---

# Tech Stack

* n8n
* OpenAI GPT Models
* Groq LLMs (Llama 3.3 70B, Qwen 3)
* Gmail API
* Google Sheets API
* Google Calendar API
* Google Tasks API
* Telegram Bot API
* Google Gemini
* HTTP APIs
* AI Agents & Tool Calling

---

# Projects

## 1. Form Automation

### Overview

A beginner-friendly automation workflow that collects user data through an n8n form, stores it in Google Sheets, and sends an automated confirmation email.

### Features

* Web form creation using n8n Form Trigger
* Collects:

  * Name
  * Student ID
  * Branch
* Stores responses in Google Sheets
* Sends automated confirmation emails via Gmail

### Workflow

Form Submission
↓
Google Sheets
↓
Gmail Notification

### Use Cases

* Student registrations
* Event registrations
* Feedback collection
* Lead generation forms

---

## 2. Google Sheets Email Agent

### Overview

An intelligent data enrichment and email generation workflow that reads user records from Google Sheets, enriches them using external APIs, and generates personalized emails using AI.

### Features

#### Data Enrichment

Uses public APIs to infer:

* Gender (Genderize API)
* Age (Agify API)
* Nationality (Nationalize API)

#### Data Storage

Updates Google Sheets with enriched information.

#### AI Email Generation

OpenAI generates:

* Email Subject
* Personalized Email Body

#### Email Delivery

Automatically sends generated emails through Gmail.

### Workflow

Google Sheets
↓
Genderize API
↓
Agify API
↓
Nationalize API
↓
Update Google Sheets
↓
OpenAI
↓
Gmail

### Use Cases

* Marketing campaigns
* Lead nurturing
* CRM automation
* Personalized communication

---

## 3. Email Agent

### Overview

An AI-powered Gmail assistant that automatically categorizes incoming emails and drafts intelligent responses.

### Features

#### Email Monitoring

Continuously monitors Gmail inbox.

#### Email Classification

Classifies emails into:

* Doubt
* Course
* Collaboration

#### Smart Response Generation

Creates:

* Email Subject
* HTML-formatted Reply

#### Automatic Labeling

Uses Gmail labels dynamically.

#### Draft Creation

Creates Gmail drafts instead of sending directly, enabling human review.

### Workflow

Gmail Trigger
↓
Fetch Email
↓
AI Agent
↓
Label Email
↓
Create Draft Reply

### Use Cases

* Customer support
* Educational support
* Business collaboration handling
* Inbox management

---

## 4. Single Agent (Google Tasks Assistant)

### Overview

A conversational AI assistant capable of interacting with Google Tasks through tool calling.

### Features

* Chat-based interaction
* Memory-enabled conversations
* Google Tasks integration
* Task retrieval and summarization
* Context-aware responses

### Workflow

Chat Input
↓
AI Agent
↓
Google Tasks Tool
↓
Response

### Use Cases

* Personal productivity assistant
* Task management
* Daily planning assistant


---

## 5. Multi-Agent Personal Assistant

### Overview

A production-style multi-agent system that integrates messaging platforms, voice transcription, memory, task management, and calendar management.

This project demonstrates advanced Agentic AI architecture using multiple tools and workflows.

### Key Capabilities

#### Telegram Assistant

Accepts user requests through Telegram.

#### Text & Voice Support

Supports:

* Text messages
* Voice messages

#### Voice Transcription

Voice recordings are transcribed using Google Gemini.

#### Long-Term Conversation Memory

Maintains context using memory nodes.

#### Google Tasks Agent

Handles:

* Task retrieval
* Task summaries
* Productivity assistance

#### Calendar Agent

Delegates calendar-related requests to a dedicated Calendar Agent workflow.

#### Multi-LLM Architecture

Uses:

* GPT-4.1 Mini
* Llama 3.3 70B
* Qwen 3

for reasoning and decision-making.

### Workflow

Telegram
↓
Text / Voice Detection
↓
Voice Transcription (Gemini)
↓
AI Agent
↓
├── Google Tasks Tool
├── Calendar Agent
└── Memory
↓
Telegram Response

### Advanced Features

* Multi-Agent Architecture
* Agent Delegation
* Tool Calling
* Memory Management
* Voice AI
* Workflow Orchestration
* Cross-Agent Communication

### Use Cases

* Personal AI Assistant
* Productivity Management
* Calendar Scheduling
* Task Tracking
* Voice-Based AI Interaction

---

# Calendar Agent (Sub-Agent)

The Multi-Agent Assistant includes a dedicated Calendar Agent.

### Responsibilities

* Create Google Calendar events
* Retrieve upcoming events
* Summarize schedules
* Handle natural language scheduling requests

### Features

* Event Creation
* Event Retrieval
* Calendar Querying
* Session Memory
* AI-powered Date Parsing

### Workflow

Request
↓
Calendar Agent
↓
Google Calendar Tools
↓
Response

---

# Learning Outcomes

Through these projects, I gained experience in:

* Workflow Automation
* Agentic AI Systems
* Multi-Agent Architectures
* Prompt Engineering
* Tool Calling
* LLM Integration
* API Integrations
* Google Workspace Automation
* Conversational AI
* Voice AI Applications
* Memory-Based Agents
* Business Process Automation

---


* LLM Applications
* n8n Development
