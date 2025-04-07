# select-command README

Helps to pick one of commands  

Вызывает выпадающий список команд  

Тоже хорошее расширение [rebornix/vscode-toggle](https://github.com/rebornix/vscode-toggle/blob/master/src/extension.ts)

## Example of using in my configuration
```json
{
		"key": "ctrl+f12",
		"command": "select-command.quick",
		"args": [
			"workbench.action.toggleDevTools",
			"workbench.action.reloadWindow",
			"workbench.action.toggleFullScreen",
			"workbench.action.toggleZenMode"
		]
	},
	{
		"key": "ctrl+r",
		"command": "select-command.quick",
		"args": [
			"editor.action.quickFix",
			"editor.action.refactor",
			"editor.action.surroundWithSnippet",
			"editor.action.insertSnipper"
		]
	},
	{
		"key": "ctrl+\\",
		"command": "select-command.quick",
		"args": [
			"workbench.action.moveEditorToNewWindow",
			"workbench.action.splitEditor"
		]
	},
	{
		"key": "ctrl+[Comma]",
		"command": "select-command.quick",
		"args": [
			"workbench.action.openGlobalKeybindings",
			"workbench.action.openSettings",
			"workbench.action.openSnippets"
		]
	},
```