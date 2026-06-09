import type { INodeProperties } from 'n8n-workflow';

export const auditLogsAuditLogRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Audit Log Root"
					]
				}
			},
			"options": [
				{
					"name": "Audit Logs Audit Log Root Get Audit Log Root",
					"value": "Audit Logs Audit Log Root Get Audit Log Root",
					"action": "Get auditLogs",
					"description": "Get auditLogs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/auditLogs"
						}
					}
				},
				{
					"name": "Audit Logs Audit Log Root Update Audit Log Root",
					"value": "Audit Logs Audit Log Root Update Audit Log Root",
					"action": "Update auditLogs",
					"description": "Update auditLogs",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/auditLogs"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /auditLogs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Audit Log Root"
					],
					"operation": [
						"Audit Logs Audit Log Root Get Audit Log Root"
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
						"Audit Logs Audit Log Root"
					],
					"operation": [
						"Audit Logs Audit Log Root Get Audit Log Root"
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
						"Audit Logs Audit Log Root"
					],
					"operation": [
						"Audit Logs Audit Log Root Get Audit Log Root"
					]
				}
			}
		},
		{
			"displayName": "PATCH /auditLogs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Audit Log Root"
					],
					"operation": [
						"Audit Logs Audit Log Root Update Audit Log Root"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Audit Log Root"
					],
					"operation": [
						"Audit Logs Audit Log Root Update Audit Log Root"
					]
				}
			}
		},
		{
			"displayName": "Directory Audits",
			"name": "directoryAudits",
			"type": "json",
			"default": "[\n  {\n    \"additionalDetails\": [\n      {}\n    ],\n    \"initiatedBy\": {\n      \"app\": {},\n      \"user\": {\n        \"@odata.type\": \"#microsoft.graph.auditUserIdentity\"\n      }\n    },\n    \"targetResources\": [\n      {\n        \"modifiedProperties\": [\n          {}\n        ]\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "directoryAudits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Audit Log Root"
					],
					"operation": [
						"Audit Logs Audit Log Root Update Audit Log Root"
					]
				}
			}
		},
		{
			"displayName": "Directory Provisioning",
			"name": "directoryProvisioning",
			"type": "json",
			"default": "[\n  {\n    \"initiatedBy\": {\n      \"@odata.type\": \"#microsoft.graph.initiator\"\n    },\n    \"modifiedProperties\": [\n      {}\n    ],\n    \"provisioningStatusInfo\": {\n      \"errorInformation\": {}\n    },\n    \"provisioningSteps\": [\n      {\n        \"details\": {},\n        \"status\": {}\n      }\n    ],\n    \"servicePrincipal\": {\n      \"@odata.type\": \"#microsoft.graph.provisioningServicePrincipal\"\n    },\n    \"sourceIdentity\": {\n      \"@odata.type\": \"#microsoft.graph.provisionedIdentity\",\n      \"details\": {}\n    },\n    \"sourceSystem\": {\n      \"@odata.type\": \"#microsoft.graph.provisioningSystem\",\n      \"details\": {}\n    },\n    \"statusInfo\": {\n      \"status\": {}\n    },\n    \"targetIdentity\": {},\n    \"targetSystem\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "directoryProvisioning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Audit Log Root"
					],
					"operation": [
						"Audit Logs Audit Log Root Update Audit Log Root"
					]
				}
			}
		},
		{
			"displayName": "Provisioning",
			"name": "provisioning",
			"type": "json",
			"default": "[\n  {\n    \"initiatedBy\": {\n      \"@odata.type\": \"#microsoft.graph.initiator\"\n    },\n    \"modifiedProperties\": [\n      {}\n    ],\n    \"provisioningStatusInfo\": {\n      \"errorInformation\": {}\n    },\n    \"provisioningSteps\": [\n      {\n        \"details\": {},\n        \"status\": {}\n      }\n    ],\n    \"servicePrincipal\": {\n      \"@odata.type\": \"#microsoft.graph.provisioningServicePrincipal\"\n    },\n    \"sourceIdentity\": {\n      \"@odata.type\": \"#microsoft.graph.provisionedIdentity\",\n      \"details\": {}\n    },\n    \"sourceSystem\": {\n      \"@odata.type\": \"#microsoft.graph.provisioningSystem\",\n      \"details\": {}\n    },\n    \"statusInfo\": {\n      \"status\": {}\n    },\n    \"targetIdentity\": {},\n    \"targetSystem\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "provisioning",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Audit Log Root"
					],
					"operation": [
						"Audit Logs Audit Log Root Update Audit Log Root"
					]
				}
			}
		},
		{
			"displayName": "Sign Ins",
			"name": "signIns",
			"type": "json",
			"default": "[\n  {\n    \"appliedConditionalAccessPolicies\": [\n      {\n        \"authenticationStrength\": {},\n        \"conditionsSatisfied\": {},\n        \"enforcedGrantControls\": [\n          null\n        ],\n        \"enforcedSessionControls\": [\n          null\n        ],\n        \"excludeRulesSatisfied\": [\n          {\n            \"conditionalAccessCondition\": {}\n          }\n        ],\n        \"includeRulesSatisfied\": [\n          {}\n        ],\n        \"sessionControlsNotSatisfied\": [\n          null\n        ]\n      }\n    ],\n    \"appliedEventListeners\": [\n      {\n        \"handlerResult\": {}\n      }\n    ],\n    \"authenticationAppDeviceDetails\": {},\n    \"authenticationAppPolicyEvaluationDetails\": [\n      {}\n    ],\n    \"authenticationContextClassReferences\": [\n      {}\n    ],\n    \"authenticationDetails\": [\n      {}\n    ],\n    \"authenticationMethodsUsed\": [\n      null\n    ],\n    \"authenticationProcessingDetails\": [\n      {}\n    ],\n    \"authenticationRequirementPolicies\": [\n      {}\n    ],\n    \"deviceDetail\": {},\n    \"location\": {\n      \"geoCoordinates\": {}\n    },\n    \"mfaDetail\": {},\n    \"networkLocationDetails\": [\n      {\n        \"networkNames\": [\n          null\n        ]\n      }\n    ],\n    \"privateLinkDetails\": {},\n    \"riskEventTypes_v2\": [\n      null\n    ],\n    \"riskLevelDuringSignIn\": {},\n    \"sessionLifetimePolicies\": [\n      {}\n    ],\n    \"signInEventTypes\": [\n      null\n    ],\n    \"status\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "signIns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Audit Logs Audit Log Root"
					],
					"operation": [
						"Audit Logs Audit Log Root Update Audit Log Root"
					]
				}
			}
		},
];
