import type { INodeProperties } from 'n8n-workflow';

export const policiesIdentitySecurityDefaultsEnforcementPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Identity Security Defaults Enforcement Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies Delete Identity Security Defaults Enforcement Policy",
					"value": "Policies Delete Identity Security Defaults Enforcement Policy",
					"action": "Delete navigation property identitySecurityDefaultsEnforcementPolicy for policies",
					"description": "Delete navigation property identitySecurityDefaultsEnforcementPolicy for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/identitySecurityDefaultsEnforcementPolicy"
						}
					}
				},
				{
					"name": "Policies Get Identity Security Defaults Enforcement Policy",
					"value": "Policies Get Identity Security Defaults Enforcement Policy",
					"action": "Get identitySecurityDefaultsEnforcementPolicy",
					"description": "Retrieve the properties of an identitySecurityDefaultsEnforcementPolicy object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/identitySecurityDefaultsEnforcementPolicy"
						}
					}
				},
				{
					"name": "Policies Update Identity Security Defaults Enforcement Policy",
					"value": "Policies Update Identity Security Defaults Enforcement Policy",
					"action": "Update identitySecurityDefaultsEnforcementPolicy",
					"description": "Update the properties of an identitySecurityDefaultsEnforcementPolicy object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/identitySecurityDefaultsEnforcementPolicy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /policies/identitySecurityDefaultsEnforcementPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Identity Security Defaults Enforcement Policy"
					],
					"operation": [
						"Policies Delete Identity Security Defaults Enforcement Policy"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Identity Security Defaults Enforcement Policy"
					],
					"operation": [
						"Policies Delete Identity Security Defaults Enforcement Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/identitySecurityDefaultsEnforcementPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Identity Security Defaults Enforcement Policy"
					],
					"operation": [
						"Policies Get Identity Security Defaults Enforcement Policy"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Identity Security Defaults Enforcement Policy"
					],
					"operation": [
						"Policies Get Identity Security Defaults Enforcement Policy"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Identity Security Defaults Enforcement Policy"
					],
					"operation": [
						"Policies Get Identity Security Defaults Enforcement Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/identitySecurityDefaultsEnforcementPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Identity Security Defaults Enforcement Policy"
					],
					"operation": [
						"Policies Update Identity Security Defaults Enforcement Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/identitySecurityDefaultsEnforcementPolicy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Identity Security Defaults Enforcement Policy"
					],
					"operation": [
						"Policies Update Identity Security Defaults Enforcement Policy"
					]
				}
			}
		},
];
