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

<img width="905" height="440" alt="image" src="https://github.com/user-attachments/assets/b36983a9-98db-48b7-beaa-b128420d9994" />


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

<img width="1454" height="330" alt="image" src="https://github.com/user-attachments/assets/517ebe38-daeb-4ca6-8b91-08ffdf5bf53b" />


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

<img width="1445" height="655" alt="image" src="https://github.com/user-attachments/assets/ea8cfbaa-16f6-4b40-a1a2-ea6ecb3625a0" />


### Use Cases

* Customer support
* Educational support
* Business collaboration handling
* Inbox management

---

## Google Tasks Agent

### Overview

A conversational AI agent built using n8n that integrates directly with Google Tasks. The agent can understand natural language queries, access task lists, and provide intelligent summaries of pending tasks while maintaining conversational context through memory.

### Features

#### Google Tasks Integration

The agent connects directly to Google Tasks and retrieves task information in real time.

#### Conversational Memory

Maintains context across multiple interactions using memory, allowing more natural conversations.

#### Intelligent Task Summarization

Instead of simply listing tasks, the AI analyzes and summarizes them in a user-friendly format.

### Workflow

Chat Message
↓
AI Agent
↓
Google Tasks Tool
↓
Task Retrieval
↓
AI Summary
↓
User Response
<img width="1044" height="605" alt="image" src="https://github.com/user-attachments/assets/9e160cbc-02fc-46c9-b7ac-4670869e6814" />


#### Components

**Chat Trigger**

* Receives user messages.

**OpenAI GPT Model**

* Understands user intent.
* Decides when to call Google Tasks.

**Google Tasks Tool**

* Fetches task information from Google Tasks.

**Memory Buffer**

* Stores previous conversation context.
* Enables follow-up questions and contextual responses.

**AI Agent**

* Coordinates reasoning and tool usage.

### Example Queries

* What tasks are due today?
* Show all pending tasks.
* Summarize my workload.
* How many tasks do I have left?
* Which tasks should I prioritize?

### Use Cases

* Personal productivity assistant
* Daily task management
* Work planning
* To-do list summarization
* AI-powered task tracking

## 5. Single Agent (Google Tasks Assistant)

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

<img width="978" height="545" alt="image" src="https://github.com/user-attachments/assets/f16ebce3-a91c-4804-b7c2-263646f26b42" />


### Use Cases

* Personal productivity assistant
* Task management
* Daily planning assistant


---

## 6. Multi-Agent Personal Assistant

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

<img width="1314" height="587" alt="image" src="https://github.com/user-attachments/assets/2a671bb1-bb05-40df-8774-a2080641612e" />


### Use Cases

* Personal AI Assistant
* Productivity Management
* Calendar Scheduling
* Task Tracking
* Voice-Based AI Interaction

---

## Google Calendar Agent

### Overview

An AI-powered scheduling assistant built with n8n that enables users to create, retrieve, and manage Google Calendar events using natural language. The agent can be accessed through workflow execution, webhook APIs, or as a tool within larger multi-agent systems.

### Workflow

User Request
↓
AI Calendar Agent
↓
Google Calendar Tools
├── Create Event
└── Get Events
↓
Summarized Response

### Architecture
<img width="1258" height="576" alt="image" src="https://github.com/user-attachments/assets/0341a723-77bf-4df1-818d-30ed1a6923ac" />

#### Components

**Webhook Trigger**

* Accepts external scheduling requests.

**AI Agent**

* Understands scheduling intent.
* Determines whether to create or retrieve events.

**Google Calendar Tools**

* Event Creation
* Event Retrieval

**Memory Buffer**

* Stores conversation context.
* Enables contextual scheduling.

**LLMs**

* Llama 3.3 70B
* Qwen 3 32B

### Example Queries

* Schedule a team meeting tomorrow at 2 PM.
* Create an interview reminder for Friday.
* Show my upcoming events.
* What is on my calendar this week?
* Do I have any meetings tomorrow?

### Use Cases

* Personal scheduling assistant
* Appointment management
* Team calendar automation
* AI-powered event planning
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

