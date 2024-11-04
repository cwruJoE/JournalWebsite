.PHONY: pc, deps,

deps:
	@echo "Installing dependencies..."
	npm install
	npx lefthook install


pc:
	@echo "Running pre-commit hooks..."
	npx lefthook run pre-commit
