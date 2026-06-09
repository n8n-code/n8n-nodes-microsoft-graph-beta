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
						"Threat Submission Url Threat Submission"
					]
				}
			},
			"options": [
				{
					"name": "Threat Submission List Url Threats",
					"value": "Threat Submission List Url Threats",
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
					"name": "Threat Submission Create Url Threats",
					"value": "Threat Submission Create Url Threats",
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
					"name": "Threat Submission Delete Url Threats",
					"value": "Threat Submission Delete Url Threats",
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
					"name": "Threat Submission Get Url Threats",
					"value": "Threat Submission Get Url Threats",
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
					"name": "Threat Submission Update Url Threats",
					"value": "Threat Submission Update Url Threats",
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission List Url Threats"
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission List Url Threats"
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission List Url Threats"
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission List Url Threats"
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission List Url Threats"
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission List Url Threats"
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission List Url Threats"
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission List Url Threats"
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission List Url Threats"
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission Create Url Threats"
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission Create Url Threats"
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission Delete Url Threats"
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission Delete Url Threats"
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission Get Url Threats"
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission Get Url Threats"
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission Get Url Threats"
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission Update Url Threats"
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
						"Threat Submission Url Threat Submission"
					],
					"operation": [
						"Threat Submission Update Url Threats"
					]
				}
			}
		},
];
