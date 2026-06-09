import type { INodeProperties } from 'n8n-workflow';

export const identityIdentityUserFlowAttributeDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity User Flow Attribute"
					]
				}
			},
			"options": [
				{
					"name": "Identity List User Flow Attributes",
					"value": "Identity List User Flow Attributes",
					"action": "List identityUserFlowAttributes",
					"description": "Retrieve a list of identityUserFlowAttribute objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/userFlowAttributes"
						}
					}
				},
				{
					"name": "Identity Create User Flow Attributes",
					"value": "Identity Create User Flow Attributes",
					"action": "Create identityUserFlowAttribute",
					"description": "Create a new identityUserFlowAttribute object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/userFlowAttributes"
						}
					}
				},
				{
					"name": "Identity Delete User Flow Attributes",
					"value": "Identity Delete User Flow Attributes",
					"action": "Delete navigation property userFlowAttributes for identity",
					"description": "Delete navigation property userFlowAttributes for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/userFlowAttributes/{{$parameter[\"identityUserFlowAttribute-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Get User Flow Attributes",
					"value": "Identity Get User Flow Attributes",
					"action": "Get userFlowAttributes from identity",
					"description": "Represents entry point for identity userflow attributes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/userFlowAttributes/{{$parameter[\"identityUserFlowAttribute-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Update User Flow Attributes",
					"value": "Identity Update User Flow Attributes",
					"action": "Update the navigation property userFlowAttributes in identity",
					"description": "Update the navigation property userFlowAttributes in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/userFlowAttributes/{{$parameter[\"identityUserFlowAttribute-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /identity/userFlowAttributes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity List User Flow Attributes"
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
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity List User Flow Attributes"
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
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity List User Flow Attributes"
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
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity List User Flow Attributes"
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
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity List User Flow Attributes"
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
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity List User Flow Attributes"
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
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity List User Flow Attributes"
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
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity List User Flow Attributes"
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
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity List User Flow Attributes"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/userFlowAttributes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity Create User Flow Attributes"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/userFlowAttributes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity Create User Flow Attributes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/userFlowAttributes/{identityUserFlowAttribute-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity Delete User Flow Attributes"
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
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity Delete User Flow Attributes"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/userFlowAttributes/{identityUserFlowAttribute-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity Get User Flow Attributes"
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
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity Get User Flow Attributes"
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
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity Get User Flow Attributes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/userFlowAttributes/{identityUserFlowAttribute-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity Update User Flow Attributes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/userFlowAttributes/{identityUserFlowAttribute-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity User Flow Attribute"
					],
					"operation": [
						"Identity Update User Flow Attributes"
					]
				}
			}
		},
];
