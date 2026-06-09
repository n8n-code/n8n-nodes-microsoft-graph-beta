import type { INodeProperties } from 'n8n-workflow';

export const meMobileAppIntentAndStateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Intent And State"
					]
				}
			},
			"options": [
				{
					"name": "Me List Mobile App Intent And States",
					"value": "Me List Mobile App Intent And States",
					"action": "Get mobileAppIntentAndStates from me",
					"description": "The list of troubleshooting events for this user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mobileAppIntentAndStates"
						}
					}
				},
				{
					"name": "Me Create Mobile App Intent And States",
					"value": "Me Create Mobile App Intent And States",
					"action": "Create new navigation property to mobileAppIntentAndStates for me",
					"description": "Create new navigation property to mobileAppIntentAndStates for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mobileAppIntentAndStates"
						}
					}
				},
				{
					"name": "Me Delete Mobile App Intent And States",
					"value": "Me Delete Mobile App Intent And States",
					"action": "Delete navigation property mobileAppIntentAndStates for me",
					"description": "Delete navigation property mobileAppIntentAndStates for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mobileAppIntentAndStates/{{$parameter[\"mobileAppIntentAndState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Mobile App Intent And States",
					"value": "Me Get Mobile App Intent And States",
					"action": "Get mobileAppIntentAndStates from me",
					"description": "The list of troubleshooting events for this user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mobileAppIntentAndStates/{{$parameter[\"mobileAppIntentAndState-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update Mobile App Intent And States",
					"value": "Me Update Mobile App Intent And States",
					"action": "Update the navigation property mobileAppIntentAndStates in me",
					"description": "Update the navigation property mobileAppIntentAndStates in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mobileAppIntentAndStates/{{$parameter[\"mobileAppIntentAndState-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/mobileAppIntentAndStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me List Mobile App Intent And States"
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
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me List Mobile App Intent And States"
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
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me List Mobile App Intent And States"
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
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me List Mobile App Intent And States"
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
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me List Mobile App Intent And States"
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
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me List Mobile App Intent And States"
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
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me List Mobile App Intent And States"
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
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me List Mobile App Intent And States"
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
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me List Mobile App Intent And States"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mobileAppIntentAndStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me Create Mobile App Intent And States"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mobileAppIntentAndStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me Create Mobile App Intent And States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me Delete Mobile App Intent And States"
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
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me Delete Mobile App Intent And States"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me Get Mobile App Intent And States"
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
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me Get Mobile App Intent And States"
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
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me Get Mobile App Intent And States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me Update Mobile App Intent And States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mobileAppIntentAndStates/{mobileAppIntentAndState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Intent And State"
					],
					"operation": [
						"Me Update Mobile App Intent And States"
					]
				}
			}
		},
];
