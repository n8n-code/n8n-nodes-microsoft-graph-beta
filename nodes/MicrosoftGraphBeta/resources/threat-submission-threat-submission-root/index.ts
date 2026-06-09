import type { INodeProperties } from 'n8n-workflow';

export const threatSubmissionThreatSubmissionRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission Threat Submission Root"
					]
				}
			},
			"options": [
				{
					"name": "Threat Submission Threat Submission Root Get Threat Submission Root",
					"value": "Threat Submission Threat Submission Root Get Threat Submission Root",
					"action": "Get threatSubmission",
					"description": "Get threatSubmission",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/threatSubmission"
						}
					}
				},
				{
					"name": "Threat Submission Threat Submission Root Update Threat Submission Root",
					"value": "Threat Submission Threat Submission Root Update Threat Submission Root",
					"action": "Update threatSubmission",
					"description": "Update threatSubmission",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/threatSubmission"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /threatSubmission",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission Threat Submission Root"
					],
					"operation": [
						"Threat Submission Threat Submission Root Get Threat Submission Root"
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
						"Threat Submission Threat Submission Root"
					],
					"operation": [
						"Threat Submission Threat Submission Root Get Threat Submission Root"
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
						"Threat Submission Threat Submission Root"
					],
					"operation": [
						"Threat Submission Threat Submission Root Get Threat Submission Root"
					]
				}
			}
		},
		{
			"displayName": "PATCH /threatSubmission",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission Threat Submission Root"
					],
					"operation": [
						"Threat Submission Threat Submission Root Update Threat Submission Root"
					]
				}
			}
		},
		{
			"displayName": "PATCH /threatSubmission<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission Threat Submission Root"
					],
					"operation": [
						"Threat Submission Threat Submission Root Update Threat Submission Root"
					]
				}
			}
		},
];
