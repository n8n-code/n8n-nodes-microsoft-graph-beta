import type { INodeProperties } from 'n8n-workflow';

export const reportsUserCredentialUsageDetailsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Reports User Credential Usage Details"
					]
				}
			},
			"options": [
				{
					"name": "Reports List User Credential Usage Details",
					"value": "Reports List User Credential Usage Details",
					"action": "List userCredentialUsageDetails",
					"description": "Get a list of userCredentialUsageDetails objects for a given tenant. Details include user information, status of the reset, and the reason for failure.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/userCredentialUsageDetails"
						}
					}
				},
				{
					"name": "Reports Create User Credential Usage Details",
					"value": "Reports Create User Credential Usage Details",
					"action": "Create new navigation property to userCredentialUsageDetails for reports",
					"description": "Create new navigation property to userCredentialUsageDetails for reports",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/userCredentialUsageDetails"
						}
					}
				},
				{
					"name": "Reports Delete User Credential Usage Details",
					"value": "Reports Delete User Credential Usage Details",
					"action": "Delete navigation property userCredentialUsageDetails for reports",
					"description": "Delete navigation property userCredentialUsageDetails for reports",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/reports/userCredentialUsageDetails/{{$parameter[\"userCredentialUsageDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Get User Credential Usage Details",
					"value": "Reports Get User Credential Usage Details",
					"action": "Get userCredentialUsageDetails from reports",
					"description": "Represents the self-service password reset (SSPR) usage for a given tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/userCredentialUsageDetails/{{$parameter[\"userCredentialUsageDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Update User Credential Usage Details",
					"value": "Reports Update User Credential Usage Details",
					"action": "Update the navigation property userCredentialUsageDetails in reports",
					"description": "Update the navigation property userCredentialUsageDetails in reports",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/reports/userCredentialUsageDetails/{{$parameter[\"userCredentialUsageDetails-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /reports/userCredentialUsageDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports List User Credential Usage Details"
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
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports List User Credential Usage Details"
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
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports List User Credential Usage Details"
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
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports List User Credential Usage Details"
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
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports List User Credential Usage Details"
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
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports List User Credential Usage Details"
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
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports List User Credential Usage Details"
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
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports List User Credential Usage Details"
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
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports List User Credential Usage Details"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/userCredentialUsageDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports Create User Credential Usage Details"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/userCredentialUsageDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports Create User Credential Usage Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports Delete User Credential Usage Details"
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
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports Delete User Credential Usage Details"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports Get User Credential Usage Details"
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
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports Get User Credential Usage Details"
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
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports Get User Credential Usage Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports Update User Credential Usage Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/userCredentialUsageDetails/{userCredentialUsageDetails-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports User Credential Usage Details"
					],
					"operation": [
						"Reports Update User Credential Usage Details"
					]
				}
			}
		},
];
