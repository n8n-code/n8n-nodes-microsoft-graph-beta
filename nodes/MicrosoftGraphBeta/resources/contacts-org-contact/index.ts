import type { INodeProperties } from 'n8n-workflow';

export const contactsOrgContactDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Org Contact"
					]
				}
			},
			"options": [
				{
					"name": "Contacts Org Contact List Org Contact",
					"value": "Contacts Org Contact List Org Contact",
					"action": "List orgContacts",
					"description": "Get the list of organizational contacts for this organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts"
						}
					}
				},
				{
					"name": "Contacts Org Contact Create Org Contact",
					"value": "Contacts Org Contact Create Org Contact",
					"action": "Add new entity to contacts",
					"description": "Add new entity to contacts",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/contacts"
						}
					}
				},
				{
					"name": "Contacts Org Contact Delete Org Contact",
					"value": "Contacts Org Contact Delete Org Contact",
					"action": "Delete entity from contacts",
					"description": "Delete entity from contacts",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}"
						}
					}
				},
				{
					"name": "Contacts Org Contact Get Org Contact",
					"value": "Contacts Org Contact Get Org Contact",
					"action": "Get orgContact",
					"description": "Get the properties and relationships of an organizational contact object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}"
						}
					}
				},
				{
					"name": "Contacts Org Contact Update Org Contact",
					"value": "Contacts Org Contact Update Org Contact",
					"action": "Update entity in contacts",
					"description": "Update entity in contacts",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact List Org Contact"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact List Org Contact"
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
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact List Org Contact"
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
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact List Org Contact"
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
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact List Org Contact"
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
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact List Org Contact"
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
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact List Org Contact"
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
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact List Org Contact"
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
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact List Org Contact"
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
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact List Org Contact"
					]
				}
			}
		},
		{
			"displayName": "POST /contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact Create Org Contact"
					]
				}
			}
		},
		{
			"displayName": "POST /contacts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact Create Org Contact"
					]
				}
			}
		},
		{
			"displayName": "DELETE /contacts/{orgContact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact Delete Org Contact"
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
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact Delete Org Contact"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact Get Org Contact"
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
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact Get Org Contact"
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
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact Get Org Contact"
					]
				}
			}
		},
		{
			"displayName": "PATCH /contacts/{orgContact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact Update Org Contact"
					]
				}
			}
		},
		{
			"displayName": "PATCH /contacts/{orgContact-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Org Contact"
					],
					"operation": [
						"Contacts Org Contact Update Org Contact"
					]
				}
			}
		},
];
