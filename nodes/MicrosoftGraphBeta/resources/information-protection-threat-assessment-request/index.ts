import type { INodeProperties } from 'n8n-workflow';

export const informationProtectionThreatAssessmentRequestDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Threat Assessment Request"
					]
				}
			},
			"options": [
				{
					"name": "Information Protection List Threat Assessment Requests",
					"value": "Information Protection List Threat Assessment Requests",
					"action": "List threatAssessmentRequests",
					"description": "Retrieve a list of threatAssessmentRequest objects. A threat assessment request can be one of the following types:",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/informationProtection/threatAssessmentRequests"
						}
					}
				},
				{
					"name": "Information Protection Create Threat Assessment Requests",
					"value": "Information Protection Create Threat Assessment Requests",
					"action": "Create threatAssessmentRequest",
					"description": "Create a new threat assessment request. A threat assessment request can be one of the following types:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/informationProtection/threatAssessmentRequests"
						}
					}
				},
				{
					"name": "Information Protection Delete Threat Assessment Requests",
					"value": "Information Protection Delete Threat Assessment Requests",
					"action": "Delete navigation property threatAssessmentRequests for informationProtection",
					"description": "Delete navigation property threatAssessmentRequests for informationProtection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Information Protection Get Threat Assessment Requests",
					"value": "Information Protection Get Threat Assessment Requests",
					"action": "Get threatAssessmentRequests from informationProtection",
					"description": "Get threatAssessmentRequests from informationProtection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Information Protection Update Threat Assessment Requests",
					"value": "Information Protection Update Threat Assessment Requests",
					"action": "Update the navigation property threatAssessmentRequests in informationProtection",
					"description": "Update the navigation property threatAssessmentRequests in informationProtection",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Information Protection Threat Assessment Requests List Results",
					"value": "Information Protection Threat Assessment Requests List Results",
					"action": "Get results from informationProtection",
					"description": "A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}/results"
						}
					}
				},
				{
					"name": "Information Protection Threat Assessment Requests Create Results",
					"value": "Information Protection Threat Assessment Requests Create Results",
					"action": "Create new navigation property to results for informationProtection",
					"description": "Create new navigation property to results for informationProtection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}/results"
						}
					}
				},
				{
					"name": "Information Protection Threat Assessment Requests Delete Results",
					"value": "Information Protection Threat Assessment Requests Delete Results",
					"action": "Delete navigation property results for informationProtection",
					"description": "Delete navigation property results for informationProtection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}/results/{{$parameter[\"threatAssessmentResult-id\"]}}"
						}
					}
				},
				{
					"name": "Information Protection Threat Assessment Requests Get Results",
					"value": "Information Protection Threat Assessment Requests Get Results",
					"action": "Get results from informationProtection",
					"description": "A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}/results/{{$parameter[\"threatAssessmentResult-id\"]}}"
						}
					}
				},
				{
					"name": "Information Protection Threat Assessment Requests Update Results",
					"value": "Information Protection Threat Assessment Requests Update Results",
					"action": "Update the navigation property results in informationProtection",
					"description": "Update the navigation property results in informationProtection",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/informationProtection/threatAssessmentRequests/{{$parameter[\"threatAssessmentRequest-id\"]}}/results/{{$parameter[\"threatAssessmentResult-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /informationProtection/threatAssessmentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection List Threat Assessment Requests"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection List Threat Assessment Requests"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection List Threat Assessment Requests"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection List Threat Assessment Requests"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection List Threat Assessment Requests"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection List Threat Assessment Requests"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection List Threat Assessment Requests"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection List Threat Assessment Requests"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection List Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /informationProtection/threatAssessmentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Create Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /informationProtection/threatAssessmentRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Create Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Delete Threat Assessment Requests"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Delete Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Get Threat Assessment Requests"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Get Threat Assessment Requests"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Get Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Update Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Update Threat Assessment Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests List Results"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests List Results"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests List Results"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests List Results"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests List Results"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests List Results"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests List Results"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests List Results"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests List Results"
					]
				}
			}
		},
		{
			"displayName": "POST /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests Create Results"
					]
				}
			}
		},
		{
			"displayName": "POST /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests Create Results"
					]
				}
			}
		},
		{
			"displayName": "DELETE /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests Delete Results"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests Delete Results"
					]
				}
			}
		},
		{
			"displayName": "GET /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests Get Results"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests Get Results"
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
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests Get Results"
					]
				}
			}
		},
		{
			"displayName": "PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests Update Results"
					]
				}
			}
		},
		{
			"displayName": "PATCH /informationProtection/threatAssessmentRequests/{threatAssessmentRequest-id}/results/{threatAssessmentResult-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Threat Assessment Request"
					],
					"operation": [
						"Information Protection Threat Assessment Requests Update Results"
					]
				}
			}
		},
];
