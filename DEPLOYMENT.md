# Home Server Deployment Guide

This guide walks through launching the Teahan Sound demo on your Linux home server using Docker, Nginx (inside a container), and a dummy SMTP sink (MailHog).

## 1. Requirements

- Linux host with Docker Engine + Docker Compose v2
- SSH access to the server
- Available ports: 3000 (Node app), 8080 (Nginx proxy), 8025 (MailHog UI)
- Domain optional; you can expose 8080 directly on your LAN

## 2. Project Files

Copy the entire `teahan-sound-improved/` folder to the server:

```bash
scp -r teahan-sound-improved user@home-server:/opt/teahan-sound
```

SSH into the server and move into the directory:

```bash
ssh user@home-server
cd /opt/teahan-sound
```

## 3. Environment Variables

Create a `.env` file (you can use the provided `.env.example`):

```bash
cp .env.example .env
```

For the demo we use MailHog (dummy mail sink) so the defaults are already correct. If you later switch to a real SMTP provider, update `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and optionally `RECIPIENT_EMAIL`.

## 4. Docker Compose Stack

The stack contains three services:

- **web** – Node/Express server serving `index.html` and `/api/contact`
- **nginx** – Acts as reverse proxy, listening on port 8080
- **mailhog** – Captures outgoing emails for testing (UI on port 8025)

Launch the stack:

```bash
docker compose up -d
```

Check logs:

```bash
docker compose logs -f web
```

## 5. Accessing the Demo

- Website: `http://<server-ip>:8080`
- MailHog UI (view captured emails): `http://<server-ip>:8025`

If you have a domain and want HTTPS, point a DNS A record to your home IP and set up port forwarding (80 -> 8080). For HTTPS, you can either:

1. Terminate TLS directly on your router (if supported), or
2. Replace the `nginx` container with a `nginxproxy/nginx-proxy` + `acme-companion` stack, or
3. Use Caddy or Traefik for automatic certificates.

## 6. Customizing Ports

Edit `docker-compose.yml` if the default ports clash:

```yaml
ports:
  - "5000:3000"   # Expose Node app internally
...
ports:
  - "80:80"       # Nginx external port
```

Remember to restart afterwards:

```bash
docker compose down
docker compose up -d
```

## 7. Logs & Maintenance

- Restart stack: `docker compose restart`
- Stop stack: `docker compose down`
- Update code: pull latest changes, then `docker compose up -d --build`
- View MailHog logs: `docker compose logs -f mailhog`

## 8. Production Considerations

- Replace MailHog with real SMTP settings when ready
- Add persistent volume for logs/backups if needed
- Harden server firewall (allow only ports 22, 80/443)
- Optionally run `nginx` on the host OS instead of a container if you already have a global reverse proxy

That’s it! Once the compose stack is up, your home server will host the improved Teahan Sound website with a functional (dummy) contact form.
