import type { INodeProperties } from 'n8n-workflow';

export const trustFrameworkTrustFrameworkKeySetDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Key Set"
					]
				}
			},
			"options": [
				{
					"name": "Trust Framework List Key Sets",
					"value": "Trust Framework List Key Sets",
					"action": "List keySets",
					"description": "Retrieve a list of trustFrameworkKeySets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/trustFramework/keySets"
						}
					}
				},
				{
					"name": "Trust Framework Create Key Sets",
					"value": "Trust Framework Create Key Sets",
					"action": "Create trustFrameworkKeySet",
					"description": "Create a new trustFrameworkKeySet. The ID of the **trustFrameworkKeySet** is expected in the create request; however, it can be modified by the service. The modified ID will be available in the response and in the location header.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/trustFramework/keySets"
						}
					}
				},
				{
					"name": "Trust Framework Delete Key Sets",
					"value": "Trust Framework Delete Key Sets",
					"action": "Delete navigation property keySets for trustFramework",
					"description": "Delete navigation property keySets for trustFramework",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/trustFramework/keySets/{{$parameter[\"trustFrameworkKeySet-id\"]}}"
						}
					}
				},
				{
					"name": "Trust Framework Get Key Sets",
					"value": "Trust Framework Get Key Sets",
					"action": "Get keySets from trustFramework",
					"description": "Get keySets from trustFramework",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/trustFramework/keySets/{{$parameter[\"trustFrameworkKeySet-id\"]}}"
						}
					}
				},
				{
					"name": "Trust Framework Update Key Sets",
					"value": "Trust Framework Update Key Sets",
					"action": "Update the navigation property keySets in trustFramework",
					"description": "Update the navigation property keySets in trustFramework",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/trustFramework/keySets/{{$parameter[\"trustFrameworkKeySet-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /trustFramework/keySets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework List Key Sets"
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
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework List Key Sets"
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
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework List Key Sets"
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
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework List Key Sets"
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
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework List Key Sets"
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
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework List Key Sets"
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
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework List Key Sets"
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
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework List Key Sets"
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
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework List Key Sets"
					]
				}
			}
		},
		{
			"displayName": "POST /trustFramework/keySets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework Create Key Sets"
					]
				}
			}
		},
		{
			"displayName": "POST /trustFramework/keySets<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework Create Key Sets"
					]
				}
			}
		},
		{
			"displayName": "DELETE /trustFramework/keySets/{trustFrameworkKeySet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework Delete Key Sets"
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
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework Delete Key Sets"
					]
				}
			}
		},
		{
			"displayName": "GET /trustFramework/keySets/{trustFrameworkKeySet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework Get Key Sets"
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
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework Get Key Sets"
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
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework Get Key Sets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /trustFramework/keySets/{trustFrameworkKeySet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework Update Key Sets"
					]
				}
			}
		},
		{
			"displayName": "PATCH /trustFramework/keySets/{trustFrameworkKeySet-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Key Set"
					],
					"operation": [
						"Trust Framework Update Key Sets"
					]
				}
			}
		},
];
