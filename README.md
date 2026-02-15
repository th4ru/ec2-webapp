# EC2 Node.js Deployment Guide (Ubuntu 22.04)

This project demonstrates how to deploy a Node.js + Express web application on an AWS EC2 Ubuntu instance.

---

## 1. Create EC2 Instance

- AMI: Ubuntu Server 22.04 LTS
- Instance Type: t2.micro (free tier)
- Key Pair: ec2-project.pem
- Security Group Inbound Rules:
  - SSH | TCP | 22 | 0.0.0.0/0
  - Custom TCP | 3000 | 0.0.0.0/0

---

## 2. Connect to EC2 from Local Machine

```bash
chmod 400 ec2-project.pem
ssh -i ec2-project.pem ubuntu@<EC2-PUBLIC-IP>

