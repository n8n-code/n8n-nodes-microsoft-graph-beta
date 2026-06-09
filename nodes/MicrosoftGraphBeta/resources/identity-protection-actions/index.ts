import type { INodeProperties } from 'n8n-workflow';

export const identityProtectionActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Actions"
					]
				}
			},
			"options": [
				{
					"name": "Identity Protection Risky Service Principals Confirm Compromised",
					"value": "Identity Protection Risky Service Principals Confirm Compromised",
					"action": "Invoke action confirmCompromised",
					"description": "Confirm one or more riskyServicePrincipal objects as compromised. This action sets the targeted service principal account's risk level to `high`.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityProtection/riskyServicePrincipals/microsoft.graph.confirmCompromised"
						}
					}
				},
				{
					"name": "Identity Protection Risky Service Principals Dismiss",
					"value": "Identity Protection Risky Service Principals Dismiss",
					"action": "Invoke action dismiss",
					"description": "Dismiss the risk of one or more riskyServicePrincipal objects. This action sets the targeted service principal account's risk level to `none`. You can dismiss up to 60 service principal accounts in one request.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityProtection/riskyServicePrincipals/microsoft.graph.dismiss"
						}
					}
				},
				{
					"name": "Identity Protection Risky Users Confirm Compromised",
					"value": "Identity Protection Risky Users Confirm Compromised",
					"action": "Invoke action confirmCompromised",
					"description": "Confirm one or more riskyUser objects as compromised. This action sets the targeted user's risk level to high.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityProtection/riskyUsers/microsoft.graph.confirmCompromised"
						}
					}
				},
				{
					"name": "Identity Protection Risky Users Dismiss",
					"value": "Identity Protection Risky Users Dismiss",
					"action": "Invoke action dismiss",
					"description": "Dismiss the risk of one or more riskyUser objects. This action sets the targeted user's risk level to none. The maximum count of users to dismiss in one call is 60.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityProtection/riskyUsers/microsoft.graph.dismiss"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /identityProtection/riskyServicePrincipals/microsoft.graph.confirmCompromised",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Actions"
					],
					"operation": [
						"Identity Protection Risky Service Principals Confirm Compromised"
					]
				}
			}
		},
		{
			"displayName": "Service Principal Ids",
			"name": "servicePrincipalIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "servicePrincipalIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Actions"
					],
					"operation": [
						"Identity Protection Risky Service Principals Confirm Compromised"
					]
				}
			}
		},
		{
			"displayName": "POST /identityProtection/riskyServicePrincipals/microsoft.graph.dismiss",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Actions"
					],
					"operation": [
						"Identity Protection Risky Service Principals Dismiss"
					]
				}
			}
		},
		{
			"displayName": "Service Principal Ids",
			"name": "servicePrincipalIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "servicePrincipalIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Actions"
					],
					"operation": [
						"Identity Protection Risky Service Principals Dismiss"
					]
				}
			}
		},
		{
			"displayName": "POST /identityProtection/riskyUsers/microsoft.graph.confirmCompromised",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Actions"
					],
					"operation": [
						"Identity Protection Risky Users Confirm Compromised"
					]
				}
			}
		},
		{
			"displayName": "User Ids",
			"name": "userIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "userIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Actions"
					],
					"operation": [
						"Identity Protection Risky Users Confirm Compromised"
					]
				}
			}
		},
		{
			"displayName": "POST /identityProtection/riskyUsers/microsoft.graph.dismiss",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Actions"
					],
					"operation": [
						"Identity Protection Risky Users Dismiss"
					]
				}
			}
		},
		{
			"displayName": "User Ids",
			"name": "userIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "userIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Actions"
					],
					"operation": [
						"Identity Protection Risky Users Dismiss"
					]
				}
			}
		},
];
