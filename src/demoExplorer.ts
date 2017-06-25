import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class DemoStepNode {
    private static stepCounter: number = 1;
    name: string

    constructor(name: string) {
        this.name = `${DemoStepNode.stepCounter++} Demo ${name}`;
    }
}

export class DemoExplorerProvider implements vscode.TreeDataProvider<DemoStepNode> {

    constructor(private workspaceRootPath: string | undefined) { }

    getChildren(element?: DemoStepNode): vscode.ProviderResult<DemoStepNode[]> {
		return new Promise(resolve => {
			if (!element) {
                let demoSteps = [
                    new DemoStepNode("Create plaster manifest"),
                    new DemoStepNode("Examine manifest metadata"),
                    new DemoStepNode("Create a text input parameter")
                ];

                resolve(demoSteps);
			} else {
				resolve([]);
			}
		});
    }

	getTreeItem(demoStep: DemoStepNode): vscode.TreeItem {
		return {
			label: demoStep.name,
			collapsibleState: vscode.TreeItemCollapsibleState.Collapsed
			// command: element.isFolder ? void 0 : {
			// 	command: 'openFtpResource',
			// 	arguments: [element.resource],
			// 	title: 'Open FTP Resource'
			// },
			// iconPath: {
			// 	light: element.isFolder ? path.join(__filename, '..', '..', '..', 'resources', 'light', 'folder.svg') : path.join(__filename, '..', '..', '..', 'resources', 'light', 'document.svg'),
			// 	dark: element.isFolder ? path.join(__filename, '..', '..', '..', 'resources', 'dark', 'folder.svg') : path.join(__filename, '..', '..', '..', 'resources', 'dark', 'document.svg')
			// }
		};
	}
}
