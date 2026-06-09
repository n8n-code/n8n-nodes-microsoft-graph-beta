import type { INodeProperties } from 'n8n-workflow';

export const applicationTemplatesActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Application Templates Actions"
					]
				}
			},
			"options": [
				{
					"name": "Application Templates Application Template Instantiate",
					"value": "Application Templates Application Template Instantiate",
					"action": "Invoke action instantiate",
					"description": "Add an instance of an application from the Azure AD application gallery into your directory. You can also use this API to instantiate non-gallery apps. Use the following ID for the **applicationTemplate** object: `8adf8e6e-67b2-4cf2-a259-e3dc5476c621`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applicationTemplates/{{$parameter[\"applicationTemplate-id\"]}}/microsoft.graph.instantiate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /applicationTemplates/{applicationTemplate-id}/microsoft.graph.instantiate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Application Templates Actions"
					],
					"operation": [
						"Application Templates Application Template Instantiate"
					]
				}
			}
		},
		{
			"displayName": "Display Name",
			"name": "displayName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "displayName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Application Templates Actions"
					],
					"operation": [
						"Application Templates Application Template Instantiate"
					]
				}
			}
		},
];
