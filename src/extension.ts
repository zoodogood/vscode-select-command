import * as vscode from "vscode"

export function activate(context: vscode.ExtensionContext) {
	interface CommandBase {
		label?: string
		args?: any
		command: string
	}
	type Arg = CommandBase | string

	defineCommand("quick", async (args: Arg[]) => {
		const commands: CommandBase[] = args.map(($) => {
			switch (typeof $) {
				case "string":
					 return { command: $ }
				default: 
					return $
			}
		}) as CommandBase[]
		const picked = await vscode.window.showQuickPick(
			commands.map(($) => $.label || $.command)
		)
		if (!picked) {
			return
		}
		const target = commands.find(
			($) => $.label === picked || $.command === picked
		)!
		vscode.commands.executeCommand(target.command, target.args)
	})

	function defineCommand(id: string, callback: (...args: any[]) => void) {
		context.subscriptions.push(
			vscode.commands.registerCommand(`select-command.${id}`, callback)
		)
	}
}

export function deactivate() {}