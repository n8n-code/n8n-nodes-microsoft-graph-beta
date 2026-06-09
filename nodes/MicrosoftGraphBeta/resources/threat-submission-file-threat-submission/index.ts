import type { INodeProperties } from 'n8n-workflow';

export const threatSubmissionFileThreatSubmissionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission File Threat Submission"
					]
				}
			},
			"options": [
				{
					"name": "Threat Submission List File Threats",
					"value": "Threat Submission List File Threats",
					"action": "List fileThreatSubmissions",
					"description": "Get a list of the fileThreatSubmission objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/threatSubmission/fileThreats"
						}
					}
				},
				{
					"name": "Threat Submission Create File Threats",
					"value": "Threat Submission Create File Threats",
					"action": "Create new navigation property to fileThreats for threatSubmission",
					"description": "Create new navigation property to fileThreats for threatSubmission",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/threatSubmission/fileThreats"
						}
					}
				},
				{
					"name": "Threat Submission Delete File Threats",
					"value": "Threat Submission Delete File Threats",
					"action": "Delete navigation property fileThreats for threatSubmission",
					"description": "Delete navigation property fileThreats for threatSubmission",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/threatSubmission/fileThreats/{{$parameter[\"fileThreatSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Threat Submission Get File Threats",
					"value": "Threat Submission Get File Threats",
					"action": "Get fileThreats from threatSubmission",
					"description": "Get fileThreats from threatSubmission",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/threatSubmission/fileThreats/{{$parameter[\"fileThreatSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Threat Submission Update File Threats",
					"value": "Threat Submission Update File Threats",
					"action": "Update the navigation property fileThreats in threatSubmission",
					"description": "Update the navigation property fileThreats in threatSubmission",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/threatSubmission/fileThreats/{{$parameter[\"fileThreatSubmission-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /threatSubmission/fileThreats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission List File Threats"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission List File Threats"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission List File Threats"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission List File Threats"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission List File Threats"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission List File Threats"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission List File Threats"
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
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission List File Threats"
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
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission List File Threats"
					]
				}
			}
		},
		{
			"displayName": "POST /threatSubmission/fileThreats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission Create File Threats"
					]
				}
			}
		},
		{
			"displayName": "POST /threatSubmission/fileThreats<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission Create File Threats"
					]
				}
			}
		},
		{
			"displayName": "DELETE /threatSubmission/fileThreats/{fileThreatSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission Delete File Threats"
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
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission Delete File Threats"
					]
				}
			}
		},
		{
			"displayName": "GET /threatSubmission/fileThreats/{fileThreatSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission Get File Threats"
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
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission Get File Threats"
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
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission Get File Threats"
					]
				}
			}
		},
		{
			"displayName": "PATCH /threatSubmission/fileThreats/{fileThreatSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission Update File Threats"
					]
				}
			}
		},
		{
			"displayName": "PATCH /threatSubmission/fileThreats/{fileThreatSubmission-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission File Threat Submission"
					],
					"operation": [
						"Threat Submission Update File Threats"
					]
				}
			}
		},
];
