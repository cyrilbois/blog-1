---
title: Introduction
lang: en-US
date: 2019-04-11
description: An introduction to the DevOps field
---

## Resources

* [Lean IT book]()
* [Dev2Ops Website](http://dev2ops.org/)


## Waat?

* The practice of operations and development engineers participating together in the entire service lifecycle, from design through the development process to production support.
* Should tear down the walls between devs and ops
* [What is DevOps article](https://theagileadmin.com/what-is-devops/)

### 5 Levels

1. Values
2. Principles
3. Methods
4. Practices
5. Tools

## Why?

* [Proven effective](https://puppet.com/resources/whitepaper/2015-state-devops-report) in improving both the IT and business outcomes.

1. High performing IT organizations deploy more frequently, fail less, and recover faster
2. Lean management and continuous delivery practices help deliver values faster
3. High performance is achievable whether your apps are greenfield, brownfield, or legacy.


## Core Values - CAMS

The 4 fundamental values to bring to a devops implementation.

* Culture - Avoid Dev vs Ops
* Automation - [popot](http://dev2ops.org/2010/02/people-over-process-over-tools/)
* Measurement - MTTR, Cycle Time, Costs, Revenue
* Sharing - Openess and transparancy drives Kaizen (Discrete continuous improvement)

> That the word DevOps gets reduced to technology is a manifestation of how badly we need a cultural shift.
--Patrick DeBois

See [article](https://blog.chef.io/2010/07/16/what-devops-means-to-me/), [devops culture](http://itrevolution.com/devops-culture-part-1/)

## Principles

* [The 3 Ways](http://itrevolution.com/the-three-ways-principles-underpinning-devops/)
* Use the 3 ways to implement processes and standards suitable for your team.


### Systems thinking

* Focus on the overall outcome of the **entire** pipeline or value chain. (Compare to optimizing code without knowing the bottleneck) - Concept to Cash.
* Use systems thinking when planning how to measure outcome.

 ### Amplifying feedback loops

* Short, effective feedback loops are key to effective product development and operations

### Culture of continuous experimentation and learning

* Focus on doing and experimenting
* Actively try what works and what doesn't
* Typical sayings in this area is: Working code wins, if it hurts, do it more and fail fast.
* No one technology is a silver bullet.

## 5 Most Prevalent devOps Methodologies

1. [People over process over tools](http://dev2ops.org/2010/02/people-over-process-over-tools/), Find responsible, define process and lastly find and imlement tools to solve the problem.
2. Continuous Delivery - Code, test and release continuously. See [HP Case](http://itrevolution.com/the-amazing-devops-transformation-of-the-hp-laserjet-firmware-team-gary-gruver/)
3. Lean Management - Work in small batches, Work in progress limits, feedback loops, Vizualization. Has been proved to lead to better throughput and stability
4. Change Control - [The Visible Ops Handbook](). Operational success correlates with control over changes in environment. Eliminate fragile artifacts, create a repeatable build process, manage dependencies, create environment for continuous improvement.
5. Infrastructure as Code - Systems can and should be treated like code. Checked into source control, Reviewed, built, and tested.

## 10 Practices for DevOps Success

1. Chaos Monkey - [Netflix blog](https://medium.com/netflix-techblog)
2. Blue/Green Deployment - Have two identical systems, where one is live. Update offline system, test and point live to it.
3. Dependency injection - Losely coupled dependencies. Check [Fowler](https://martinfowler.com/articles/injection.html)
4. Andon Cords - Anyone can halt the process when needed
5. The Cloud - Allows you to treat infrastructure like you would any other program component. API-driven control.
6. Embedded Teams - Add ops person to dev team and make dev team responsible for operations of their particular software.
7. Blameless Postmortems - See [How complex systems fail paper](http://web.mit.edu/2.75/resources/random/How%20Complex%20Systems%20Fail.pdf)
8. Public Status Page - Communication is the way for customers to keep trusting your service. See [Transparent Uptime blog](http://www.transparentuptime.com/)
9. Developers on Call - Responibility for services created. This tends to make sure core problem is resolved quickly instead of operations using workarounds.
10. Incident Command System - See [Chapman](https://www.usenix.org/legacy/event/lisa05/tech/chapman.pdf)


## Tools

* [DevOps toolchain](https://en.wikipedia.org/wiki/DevOps_toolchain)
* Be careful when selecting tools. Each tool has a logistics tail
* Criteria: Programmable, verifiable (events and metrics), well behaved (config in SCM-compatible format)


## Culture and Communication

> Wall of confusion - Impedence mismatch caused by DevTeam usually organized by app or business sector - Infra team often by technology stack. -> Ineffective -> Outsourcing -> New problems

### Blameless Postmortems

* A meeting that should be held within 48 hrs of the incident, if possible
* Have a third party run the meeting
* Goal is to avoid same or similar problems in the future
* Make a description of the incident
* Identify the root cause (five why's)
* How the incident was stabilized or fixed
* Make a timeline of events, including all actions taken
* How the incident affected customers
* Remediations and corrective actions with deadlines

### Transparent Uptime

Rules for Postmortem Communication:

1. Admit failure
2. Sound like a human
3. Have a communication channel (independent of your site)
4. Above all else, be authentic

### Trust Blockers

1. Lack of context
2. Conflicting goals

### Open It Up

1. Chat rooms
2. Wiki pages
3. Source code (read)
4. Infrastructure
5. Monitoring tools
6. Ticket tracker

### The Westrum Model

* Pathological (power-oriented)
* Bureaucratic (rule-oriented)
* Generative (performance-oriented)

Minimum viable process - Everybody onboard, remove unnecessary

### Management Best Practices

* Independent, cross-functional teams
* People first
* Agile, lean processes

### Kaizen: Continuous improvement

* Good processes bring good results
* Go see for yourself (gemba)
* Speak with data, manage by facts
* Take action to contain and correct root causes
* Work as a team
* Kaizen is everybody's business

## Building Blocks

* Agile
* Lean
* ITIL, ITSM, SDLC

### Agile

* DevOps rooted in the Agile Software movement.
* The Agile Manifesto
* Frequent interrim deliverables. Sprints (Plan, Design, Build, Test, Review, Launch)





