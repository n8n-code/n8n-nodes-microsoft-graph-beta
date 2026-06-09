import type { INodeProperties } from 'n8n-workflow';

export const identityAuthenticationEventListenerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Authentication Event Listener"
					]
				}
			},
			"options": [
				{
					"name": "Identity List Authentication Event Listeners",
					"value": "Identity List Authentication Event Listeners",
					"action": "Get authenticationEventListeners from identity",
					"description": "Get authenticationEventListeners from identity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/authenticationEventListeners"
						}
					}
				},
				{
					"name": "Identity Create Authentication Event Listeners",
					"value": "Identity Create Authentication Event Listeners",
					"action": "Create new navigation property to authenticationEventListeners for identity",
					"description": "Create new navigation property to authenticationEventListeners for identity",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/authenticationEventListeners"
						}
					}
				},
				{
					"name": "Identity Delete Authentication Event Listeners",
					"value": "Identity Delete Authentication Event Listeners",
					"action": "Delete navigation property authenticationEventListeners for identity",
					"description": "Delete navigation property authenticationEventListeners for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/authenticationEventListeners/{{$parameter[\"authenticationEventListener-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Get Authentication Event Listeners",
					"value": "Identity Get Authentication Event Listeners",
					"action": "Get authenticationEventListeners from identity",
					"description": "Get authenticationEventListeners from identity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/authenticationEventListeners/{{$parameter[\"authenticationEventListener-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Update Authentication Event Listeners",
					"value": "Identity Update Authentication Event Listeners",
					"action": "Update the navigation property authenticationEventListeners in identity",
					"description": "Update the navigation property authenticationEventListeners in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/authenticationEventListeners/{{$parameter[\"authenticationEventListener-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /identity/authenticationEventListeners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity List Authentication Event Listeners"
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
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity List Authentication Event Listeners"
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
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity List Authentication Event Listeners"
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
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity List Authentication Event Listeners"
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
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity List Authentication Event Listeners"
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
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity List Authentication Event Listeners"
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
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity List Authentication Event Listeners"
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
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity List Authentication Event Listeners"
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
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity List Authentication Event Listeners"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/authenticationEventListeners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity Create Authentication Event Listeners"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/authenticationEventListeners<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity Create Authentication Event Listeners"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/authenticationEventListeners/{authenticationEventListener-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity Delete Authentication Event Listeners"
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
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity Delete Authentication Event Listeners"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/authenticationEventListeners/{authenticationEventListener-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity Get Authentication Event Listeners"
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
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity Get Authentication Event Listeners"
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
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity Get Authentication Event Listeners"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/authenticationEventListeners/{authenticationEventListener-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity Update Authentication Event Listeners"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/authenticationEventListeners/{authenticationEventListener-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Authentication Event Listener"
					],
					"operation": [
						"Identity Update Authentication Event Listeners"
					]
				}
			}
		},
];
