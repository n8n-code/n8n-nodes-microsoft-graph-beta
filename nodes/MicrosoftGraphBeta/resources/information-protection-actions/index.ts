import type { INodeProperties } from 'n8n-workflow';

export const informationProtectionActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Actions"
					]
				}
			},
			"options": [
				{
					"name": "Information Protection Data Loss Prevention Policies Evaluate",
					"value": "Information Protection Data Loss Prevention Policies Evaluate",
					"action": "Invoke action evaluate",
					"description": "Invoke action evaluate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/informationProtection/dataLossPreventionPolicies/microsoft.graph.evaluate"
						}
					}
				},
				{
					"name": "Information Protection Sensitivity Labels Evaluate",
					"value": "Information Protection Sensitivity Labels Evaluate",
					"action": "Invoke action evaluate",
					"description": "Invoke action evaluate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/informationProtection/sensitivityLabels/microsoft.graph.evaluate"
						}
					}
				},
				{
					"name": "Information Protection Sensitivity Labels Sensitivity Label Sublabels Evaluate",
					"value": "Information Protection Sensitivity Labels Sensitivity Label Sublabels Evaluate",
					"action": "Invoke action evaluate",
					"description": "Invoke action evaluate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/informationProtection/sensitivityLabels/{{$parameter[\"sensitivityLabel-id\"]}}/sublabels/microsoft.graph.evaluate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /informationProtection/dataLossPreventionPolicies/microsoft.graph.evaluate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Actions"
					],
					"operation": [
						"Information Protection Data Loss Prevention Policies Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Evaluation Input",
			"name": "evaluationInput",
			"type": "json",
			"default": "{\n  \"currentLabel\": {},\n  \"discoveredSensitiveTypes\": [\n    {\n      \"classificationAttributes\": [\n        {}\n      ]\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "evaluationInput",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Actions"
					],
					"operation": [
						"Information Protection Data Loss Prevention Policies Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Notification Info",
			"name": "notificationInfo",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "notificationInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Actions"
					],
					"operation": [
						"Information Protection Data Loss Prevention Policies Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Target",
			"name": "target",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "target",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Actions"
					],
					"operation": [
						"Information Protection Data Loss Prevention Policies Evaluate"
					]
				}
			}
		},
		{
			"displayName": "POST /informationProtection/sensitivityLabels/microsoft.graph.evaluate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Actions"
					],
					"operation": [
						"Information Protection Sensitivity Labels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Current Label",
			"name": "currentLabel",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "currentLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Actions"
					],
					"operation": [
						"Information Protection Sensitivity Labels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Discovered Sensitive Types",
			"name": "discoveredSensitiveTypes",
			"type": "json",
			"default": "[\n  {\n    \"classificationAttributes\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "discoveredSensitiveTypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Actions"
					],
					"operation": [
						"Information Protection Sensitivity Labels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "POST /informationProtection/sensitivityLabels/{sensitivityLabel-id}/sublabels/microsoft.graph.evaluate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Actions"
					],
					"operation": [
						"Information Protection Sensitivity Labels Sensitivity Label Sublabels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Current Label",
			"name": "currentLabel",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "currentLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Actions"
					],
					"operation": [
						"Information Protection Sensitivity Labels Sensitivity Label Sublabels Evaluate"
					]
				}
			}
		},
		{
			"displayName": "Discovered Sensitive Types",
			"name": "discoveredSensitiveTypes",
			"type": "json",
			"default": "[\n  {\n    \"classificationAttributes\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "discoveredSensitiveTypes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Actions"
					],
					"operation": [
						"Information Protection Sensitivity Labels Sensitivity Label Sublabels Evaluate"
					]
				}
			}
		},
];
