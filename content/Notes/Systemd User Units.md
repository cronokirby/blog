Most [[Linux]] distributions will come with [[Systemd]]. This is a great convenience for setting up long-running processes on your machine, but it's also useful for running short-lived tasks, like serving a website you're tinkering on.

For example, here's a script which starts a server in the background, with all the niceties of a systemd unit, like logging, status management, etc.

```
systemd-run --user --unit=python-http \
  nix-shell -p python3 --command \
  "python3 -m http.server --directory <DIR> 8000"
```

I'm assuming you're using [[Nix]], because why wouldn't you?