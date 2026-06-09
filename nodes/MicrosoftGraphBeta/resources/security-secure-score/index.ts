import type { INodeProperties } from 'n8n-workflow';

export const securitySecureScoreDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Secure Score"
					]
				}
			},
			"options": [
				{
					"name": "Security List Secure Scores",
					"value": "Security List Secure Scores",
					"action": "List secureScores",
					"description": "Retrieve the properties and relationships of a secureScores object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/secureScores"
						}
					}
				},
				{
					"name": "Security Create Secure Scores",
					"value": "Security Create Secure Scores",
					"action": "Create new navigation property to secureScores for security",
					"description": "Create new navigation property to secureScores for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/secureScores"
						}
					}
				},
				{
					"name": "Security Delete Secure Scores",
					"value": "Security Delete Secure Scores",
					"action": "Delete navigation property secureScores for security",
					"description": "Delete navigation property secureScores for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/secureScores/{{$parameter[\"secureScore-id\"]}}"
						}
					}
				},
				{
					"name": "Security Get Secure Scores",
					"value": "Security Get Secure Scores",
					"action": "Get secureScores from security",
					"description": "Measurements of tenants’ security posture to help protect them from threats.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/secureScores/{{$parameter[\"secureScore-id\"]}}"
						}
					}
				},
				{
					"name": "Security Update Secure Scores",
					"value": "Security Update Secure Scores",
					"action": "Update the navigation property secureScores in security",
					"description": "Update the navigation property secureScores in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/secureScores/{{$parameter[\"secureScore-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /security/secureScores",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Secure Score"
					],
					"operation": [
						"Security List Secure Scores"
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
						"Security Secure Score"
					],
					"operation": [
						"Security List Secure Scores"
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
						"Security Secure Score"
					],
					"operation": [
						"Security List Secure Scores"
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
						"Security Secure Score"
					],
					"operation": [
						"Security List Secure Scores"
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
						"Security Secure Score"
					],
					"operation": [
						"Security List Secure Scores"
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
						"Security Secure Score"
					],
					"operation": [
						"Security List Secure Scores"
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
						"Security Secure Score"
					],
					"operation": [
						"Security List Secure Scores"
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
						"Security Secure Score"
					],
					"operation": [
						"Security List Secure Scores"
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
						"Security Secure Score"
					],
					"operation": [
						"Security List Secure Scores"
					]
				}
			}
		},
		{
			"displayName": "POST /security/secureScores",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Secure Score"
					],
					"operation": [
						"Security Create Secure Scores"
					]
				}
			}
		},
		{
			"displayName": "POST /security/secureScores<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Secure Score"
					],
					"operation": [
						"Security Create Secure Scores"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/secureScores/{secureScore-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Secure Score"
					],
					"operation": [
						"Security Delete Secure Scores"
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
						"Security Secure Score"
					],
					"operation": [
						"Security Delete Secure Scores"
					]
				}
			}
		},
		{
			"displayName": "GET /security/secureScores/{secureScore-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Secure Score"
					],
					"operation": [
						"Security Get Secure Scores"
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
						"Security Secure Score"
					],
					"operation": [
						"Security Get Secure Scores"
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
						"Security Secure Score"
					],
					"operation": [
						"Security Get Secure Scores"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/secureScores/{secureScore-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Secure Score"
					],
					"operation": [
						"Security Update Secure Scores"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/secureScores/{secureScore-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Secure Score"
					],
					"operation": [
						"Security Update Secure Scores"
					]
				}
			}
		},
];
