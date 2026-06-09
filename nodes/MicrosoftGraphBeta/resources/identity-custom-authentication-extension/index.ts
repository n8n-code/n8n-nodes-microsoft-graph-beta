import type { INodeProperties } from 'n8n-workflow';

export const identityCustomAuthenticationExtensionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Custom Authentication Extension"
					]
				}
			},
			"options": [
				{
					"name": "Identity List Custom Authentication Extensions",
					"value": "Identity List Custom Authentication Extensions",
					"action": "Get customAuthenticationExtensions from identity",
					"description": "Get customAuthenticationExtensions from identity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/customAuthenticationExtensions"
						}
					}
				},
				{
					"name": "Identity Create Custom Authentication Extensions",
					"value": "Identity Create Custom Authentication Extensions",
					"action": "Create new navigation property to customAuthenticationExtensions for identity",
					"description": "Create new navigation property to customAuthenticationExtensions for identity",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/customAuthenticationExtensions"
						}
					}
				},
				{
					"name": "Identity Delete Custom Authentication Extensions",
					"value": "Identity Delete Custom Authentication Extensions",
					"action": "Delete navigation property customAuthenticationExtensions for identity",
					"description": "Delete navigation property customAuthenticationExtensions for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/customAuthenticationExtensions/{{$parameter[\"customAuthenticationExtension-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Get Custom Authentication Extensions",
					"value": "Identity Get Custom Authentication Extensions",
					"action": "Get customAuthenticationExtensions from identity",
					"description": "Get customAuthenticationExtensions from identity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/customAuthenticationExtensions/{{$parameter[\"customAuthenticationExtension-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Update Custom Authentication Extensions",
					"value": "Identity Update Custom Authentication Extensions",
					"action": "Update the navigation property customAuthenticationExtensions in identity",
					"description": "Update the navigation property customAuthenticationExtensions in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/customAuthenticationExtensions/{{$parameter[\"customAuthenticationExtension-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /identity/customAuthenticationExtensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity List Custom Authentication Extensions"
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
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity List Custom Authentication Extensions"
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
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity List Custom Authentication Extensions"
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
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity List Custom Authentication Extensions"
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
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity List Custom Authentication Extensions"
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
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity List Custom Authentication Extensions"
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
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity List Custom Authentication Extensions"
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
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity List Custom Authentication Extensions"
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
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity List Custom Authentication Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/customAuthenticationExtensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity Create Custom Authentication Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/customAuthenticationExtensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity Create Custom Authentication Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity Delete Custom Authentication Extensions"
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
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity Delete Custom Authentication Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity Get Custom Authentication Extensions"
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
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity Get Custom Authentication Extensions"
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
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity Get Custom Authentication Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity Update Custom Authentication Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/customAuthenticationExtensions/{customAuthenticationExtension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Custom Authentication Extension"
					],
					"operation": [
						"Identity Update Custom Authentication Extensions"
					]
				}
			}
		},
];
