test:
	./node_modules/.bin/tap test/governance/*.js
	./node_modules/.bin/tap test/unit/*.js

lint:
	./node_modules/.bin/tap test/governance/lint.js

.PHONY: test lint