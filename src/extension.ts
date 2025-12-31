import * as vscode from "vscode"

type JSONPrimitive = string | number | boolean | null

type JSONSerializable =
	| JSONPrimitive
	| JSONSerializable[]
	| { [k: string]: JSONSerializable | undefined }

export function activate(context: vscode.ExtensionContext) {
	interface CommandBase {
		label?: string
		args?: JSONSerializable
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
			commands.map(($) => $.label || $.command),
		)
		if (!picked) {
			return
		}
		const target = commands.find(
			($) => $.label === picked || $.command === picked,
		)!
		vscode.commands.executeCommand(target.command, target.args)
	})

	function defineCommand<TArgs>(
		id: string,
		callback: (...args: TArgs[]) => void,
	) {
		context.subscriptions.push(
			vscode.commands.registerCommand(`select-command.${id}`, callback),
		)
	}
}

export function deactivate() {}
