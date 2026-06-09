import type { INodeProperties } from 'n8n-workflow';

export const auditLogsActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Actions"
					]
				}
			},
			"options": [
				{
					"name": "Audit Logs Sign Ins Confirm Compromised",
					"value": "Audit Logs Sign Ins Confirm Compromised",
					"action": "Invoke action confirmCompromised",
					"description": "Allow admins to mark an event in the Azure AD sign in logs as risky. Events marked as risky by an admin are immediately flagged as high risk in Azure AD Identity Protection, overriding previous risk states. Admins can confirm that events flagged as risky by Azure AD Identity Protection are in fact risky. For details about investigating Identity Protection risks, see How to investigate risk.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/auditLogs/signIns/microsoft.graph.confirmCompromised"
						}
					}
				},
				{
					"name": "Audit Logs Sign Ins Confirm Safe",
					"value": "Audit Logs Sign Ins Confirm Safe",
					"action": "Invoke action confirmSafe",
					"description": "Allow admins to mark an event in Azure AD sign in logs as safe. Admins can either mark the events flagged as risky by Azure AD Identity Protection as safe, or they can mark unflagged events as safe. For details about investigating Identity Protection risks, see How to investigate risk.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/auditLogs/signIns/microsoft.graph.confirmSafe"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /auditLogs/signIns/microsoft.graph.confirmCompromised",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Actions"
					],
					"operation": [
						"Audit Logs Sign Ins Confirm Compromised"
					]
				}
			}
		},
		{
			"displayName": "Request Ids",
			"name": "requestIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "requestIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Actions"
					],
					"operation": [
						"Audit Logs Sign Ins Confirm Compromised"
					]
				}
			}
		},
		{
			"displayName": "POST /auditLogs/signIns/microsoft.graph.confirmSafe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Actions"
					],
					"operation": [
						"Audit Logs Sign Ins Confirm Safe"
					]
				}
			}
		},
		{
			"displayName": "Request Ids",
			"name": "requestIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "requestIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Actions"
					],
					"operation": [
						"Audit Logs Sign Ins Confirm Safe"
					]
				}
			}
		},
];
