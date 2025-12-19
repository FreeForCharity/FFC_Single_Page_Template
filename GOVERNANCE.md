# Project Governance

This document outlines the governance model for the Free For Charity website repository, including decision-making processes, maintainer roles, and community participation guidelines.

## Overview

Free For Charity (FFC) is a 501(c)(3) nonprofit organization (EIN: 46-2471893) committed to open-source principles and transparent governance. This repository follows a benevolent dictatorship model with collaborative decision-making for technical matters.

## Organization Structure

### Free For Charity Board

The Free For Charity organization is governed by its nonprofit board of directors, which has ultimate authority over organizational policy, legal matters, and strategic direction.

### Project Leadership

The project is led by the **Founder** and **Board of Directors**, with day-to-day technical decisions made by the **maintainer team**.

## Roles and Responsibilities

### Founder

**Clarke Moyer** serves as the Founder and primary decision-maker for the project.

**Responsibilities**:

- Strategic direction and vision
- Final authority on major architectural decisions
- Maintainer appointments and removals
- Resolution of disputes and deadlocks
- Community representation

**Contact**:

- Email: clarkemoyer@freeforcharity.org
- Phone: 520-222-8104 (text preferred)

### Maintainers

Maintainers are trusted contributors with write access to the repository who are responsible for reviewing contributions, maintaining code quality, and ensuring the project's health.

**Responsibilities**:

- Review and merge pull requests
- Triage issues and bugs
- Maintain documentation
- Ensure security best practices
- Guide community contributions
- Uphold the Code of Conduct

**Current Maintainers**: See [MAINTAINERS.md](./MAINTAINERS.md)

### Contributors

Contributors are community members who submit issues, pull requests, documentation improvements, or other valuable input to the project.

**All contributors are recognized in [CONTRIBUTORS.md](./CONTRIBUTORS.md)**, which provides:

- Full list of contributors and their contributions
- Recognition guidelines
- How to add yourself as a contributor
- Types of contributions valued by the project

**Responsibilities**:

- Follow the [Code of Conduct](./CODE_OF_CONDUCT.md)
- Adhere to [contribution guidelines](./CONTRIBUTING.md)
- Respect maintainer decisions
- Participate constructively in discussions

## Decision-Making Process

### Technical Decisions

Most technical decisions are made through the following process:

1. **Discussion**: Propose changes via GitHub Issues or Discussions
2. **Review**: Maintainers and community provide feedback
3. **Consensus**: Seek agreement among maintainers when possible
4. **Implementation**: Author or maintainers implement the approved change
5. **Merge**: Maintainers merge after code review and CI checks pass

### Major Architectural Changes

For significant architectural changes or feature additions:

1. **RFC (Request for Comments)**: Open a GitHub Issue with the "RFC" label
2. **Community Input**: Allow at least 7 days for community feedback
3. **Maintainer Review**: Maintainers discuss and provide recommendations
4. **Decision**: Founder or designated maintainer makes final decision
5. **Documentation**: Update relevant documentation before merging

### Emergency Security Fixes

Security vulnerabilities may be addressed through an expedited process:

1. **Private Disclosure**: Report via [SECURITY.md](./SECURITY.md)
2. **Assessment**: Maintainers assess severity and impact
3. **Fix**: Develop and test fix privately
4. **Deployment**: Deploy fix to production
5. **Disclosure**: Publicly disclose after fix is deployed

## Maintainer Management

### Becoming a Maintainer

Contributors may be invited to become maintainers based on:

- Consistent, high-quality contributions over time (typically 3+ months)
- Deep understanding of the codebase and project goals
- Demonstrated ability to review code effectively
- Positive community interactions
- Commitment to the Code of Conduct
- Alignment with Free For Charity's mission

**Process**:

1. **Nomination**: Existing maintainer nominates candidate
2. **Discussion**: Maintainers discuss candidate's qualifications
3. **Approval**: Founder or maintainer lead approves appointment
4. **Onboarding**: New maintainer receives repository access and orientation

### Maintainer Expectations

Maintainers are expected to:

- Remain active in the project (at minimum, respond to mentions within 2 weeks)
- Review pull requests in a timely manner
- Participate in major decisions
- Maintain professional and respectful communication
- Uphold and enforce the Code of Conduct
- Keep sensitive information confidential

### Stepping Down

Maintainers may step down at any time by notifying the Founder and other maintainers. We appreciate advance notice when possible to facilitate a smooth transition.

### Removal

Maintainers may be removed for:

- Violation of the Code of Conduct
- Prolonged inactivity (6+ months without communication)
- Repeated poor judgment in technical decisions
- Breach of security or confidentiality
- Actions harmful to the project or community

**Process**:

1. **Concern Raised**: Issue raised with Founder
2. **Investigation**: Review of concerns and gather context
3. **Discussion**: Private discussion with maintainer
4. **Decision**: Founder makes final decision
5. **Communication**: Respectful communication to team and community as appropriate

## Voting and Consensus

### Consensus

Most decisions are made by **lazy consensus**:

- Proposal is made via GitHub Issue or Pull Request
- If no objections after reasonable time (typically 72 hours), it's accepted
- Silence is considered assent

### Voting

When consensus cannot be reached:

1. **Call for Vote**: Any maintainer can call for a vote
2. **Voting Period**: 7-day voting window
3. **Eligible Voters**: All current maintainers
4. **Quorum**: 50% of maintainers must participate
5. **Decision**: Simple majority (>50%) wins
6. **Tie Breaker**: Founder breaks ties

### Founder Authority

The Founder reserves the right to make unilateral decisions when:

- Emergency action is required
- The project's mission or values are at stake
- Prolonged deadlock prevents progress
- Legal or organizational policy requires it

## Communication Channels

### GitHub

Primary communication platform:

- **Issues**: Bug reports, feature requests
- **Pull Requests**: Code contributions
- **Discussions**: General questions, ideas, RFCs
- **Security Advisories**: Private vulnerability reports

### Email

For private or sensitive matters:

- Founder: clarkemoyer@freeforcharity.org
- Security: See [SECURITY.md](./SECURITY.md)

### Response Times

We strive for the following response times:

- **Security vulnerabilities**: Within 48 hours
- **Pull requests**: Initial review within 1 week
- **Issues**: Triage within 1 week
- **Community questions**: Best effort, typically within 1 week

Note: These are goals, not guarantees. We're a small nonprofit with limited resources.

## Code of Conduct Enforcement

The [Code of Conduct](./CODE_OF_CONDUCT.md) is enforced by:

1. **Primary Enforcer**: Clarke Moyer (Founder)
2. **Secondary Enforcers**: Designated maintainers

Reports are handled according to the enforcement guidelines in the Code of Conduct.

## Amendments to Governance

This governance document may be amended by:

1. **Proposal**: Submit pull request with proposed changes
2. **Discussion**: Allow 14-day comment period
3. **Approval**: Requires approval from Founder
4. **Documentation**: Update last-modified date

Significant changes should be announced to contributors.

## License

All contributions to this project are licensed under the [Apache 2.0 License](./LICENSE).

## Acknowledgments

This governance model is inspired by:

- [CNCF Project Governance](https://github.com/cncf/foundation/blob/main/governance.md)
- [Contributor Covenant](https://www.contributor-covenant.org/)
- Best practices from the open-source community

---

**Last Updated**: December 6, 2025  
**Version**: 1.0  
**CNCF Alignment**: This governance model aligns with CNCF project standards for transparency and community participation.
