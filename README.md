# select-command

Helps to pick one of commands  

Вызывает выпадающий список команд  

Тоже хорошее расширение [rebornix/vscode-toggle](https://github.com/rebornix/vscode-toggle/blob/master/src/extension.ts)


`Tip`  
 CTRL x SHIFT x P:  Command «Preferences: Open Default Keyboard Shortcuts (JSON)»
## Example of using in my configuration
```json
// VSCode global Keyboard Shortcuts
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
{
	"key": "insert",
	"command": "select-command.quick",
	"args": [
			{
				"label": "Toggle font size",
				"command": "toggle",
				"args": {
					"id": "editor.fontSize",
					"value": [
						{ "editor.fontSize": 7 },
						{ "editor.fontSize": 9 },
						{ "editor.fontSize": 14 }
					]
				}
			},
			{
				"label": "Toggle theme",
				"command": "workbench.action.selectTheme"
			},
	]
},
```