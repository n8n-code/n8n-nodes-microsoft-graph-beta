import type { INodeProperties } from 'n8n-workflow';

export const identityContinuousAccessEvaluationPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Continuous Access Evaluation Policy"
					]
				}
			},
			"options": [
				{
					"name": "Identity Delete Continuous Access Evaluation Policy",
					"value": "Identity Delete Continuous Access Evaluation Policy",
					"action": "Delete navigation property continuousAccessEvaluationPolicy for identity",
					"description": "Delete navigation property continuousAccessEvaluationPolicy for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/continuousAccessEvaluationPolicy"
						}
					}
				},
				{
					"name": "Identity Get Continuous Access Evaluation Policy",
					"value": "Identity Get Continuous Access Evaluation Policy",
					"action": "Get continuousAccessEvaluationPolicy",
					"description": "Read the properties and relationships of a continuousAccessEvaluationPolicy object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/continuousAccessEvaluationPolicy"
						}
					}
				},
				{
					"name": "Identity Update Continuous Access Evaluation Policy",
					"value": "Identity Update Continuous Access Evaluation Policy",
					"action": "Update continuousAccessEvaluationPolicy",
					"description": "Update the properties of a continuousAccessEvaluationPolicy object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/continuousAccessEvaluationPolicy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /identity/continuousAccessEvaluationPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Continuous Access Evaluation Policy"
					],
					"operation": [
						"Identity Delete Continuous Access Evaluation Policy"
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
						"Identity Continuous Access Evaluation Policy"
					],
					"operation": [
						"Identity Delete Continuous Access Evaluation Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/continuousAccessEvaluationPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Continuous Access Evaluation Policy"
					],
					"operation": [
						"Identity Get Continuous Access Evaluation Policy"
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
						"Identity Continuous Access Evaluation Policy"
					],
					"operation": [
						"Identity Get Continuous Access Evaluation Policy"
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
						"Identity Continuous Access Evaluation Policy"
					],
					"operation": [
						"Identity Get Continuous Access Evaluation Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/continuousAccessEvaluationPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Continuous Access Evaluation Policy"
					],
					"operation": [
						"Identity Update Continuous Access Evaluation Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/continuousAccessEvaluationPolicy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Continuous Access Evaluation Policy"
					],
					"operation": [
						"Identity Update Continuous Access Evaluation Policy"
					]
				}
			}
		},
];
