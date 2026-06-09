import type { INodeProperties } from 'n8n-workflow';

export const threatSubmissionUrlThreatSubmissionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission URL Threat Submission"
					]
				}
			},
			"options": [
				{
					"name": "Threat Submission List URL Threats",
					"value": "Threat Submission List URL Threats",
					"action": "List urlThreatSubmissions",
					"description": "Get a list of the urlThreatSubmission objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/threatSubmission/urlThreats"
						}
					}
				},
				{
					"name": "Threat Submission Create URL Threats",
					"value": "Threat Submission Create URL Threats",
					"action": "Create urlThreatSubmission",
					"description": "Create a new urlThreatSubmission object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/threatSubmission/urlThreats"
						}
					}
				},
				{
					"name": "Threat Submission Delete URL Threats",
					"value": "Threat Submission Delete URL Threats",
					"action": "Delete navigation property urlThreats for threatSubmission",
					"description": "Delete navigation property urlThreats for threatSubmission",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/threatSubmission/urlThreats/{{$parameter[\"urlThreatSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Threat Submission Get URL Threats",
					"value": "Threat Submission Get URL Threats",
					"action": "Get urlThreats from threatSubmission",
					"description": "Get urlThreats from threatSubmission",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/threatSubmission/urlThreats/{{$parameter[\"urlThreatSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Threat Submission Update URL Threats",
					"value": "Threat Submission Update URL Threats",
					"action": "Update the navigation property urlThreats in threatSubmission",
					"description": "Update the navigation property urlThreats in threatSubmission",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/threatSubmission/urlThreats/{{$parameter[\"urlThreatSubmission-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /threatSubmission/urlThreats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission List URL Threats"
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
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission List URL Threats"
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
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission List URL Threats"
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
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission List URL Threats"
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
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission List URL Threats"
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
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission List URL Threats"
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
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission List URL Threats"
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
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission List URL Threats"
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
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission List URL Threats"
					]
				}
			}
		},
		{
			"displayName": "POST /threatSubmission/urlThreats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission Create URL Threats"
					]
				}
			}
		},
		{
			"displayName": "POST /threatSubmission/urlThreats<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission Create URL Threats"
					]
				}
			}
		},
		{
			"displayName": "DELETE /threatSubmission/urlThreats/{urlThreatSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission Delete URL Threats"
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
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission Delete URL Threats"
					]
				}
			}
		},
		{
			"displayName": "GET /threatSubmission/urlThreats/{urlThreatSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission Get URL Threats"
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
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission Get URL Threats"
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
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission Get URL Threats"
					]
				}
			}
		},
		{
			"displayName": "PATCH /threatSubmission/urlThreats/{urlThreatSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission Update URL Threats"
					]
				}
			}
		},
		{
			"displayName": "PATCH /threatSubmission/urlThreats/{urlThreatSubmission-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Threat Submission URL Threat Submission"
					],
					"operation": [
						"Threat Submission Update URL Threats"
					]
				}
			}
		},
];
