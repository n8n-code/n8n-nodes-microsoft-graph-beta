import type { INodeProperties } from 'n8n-workflow';

export const contactsDirectoryObjectDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Directory Object"
					]
				}
			},
			"options": [
				{
					"name": "Contacts List Direct Reports",
					"value": "Contacts List Direct Reports",
					"action": "Get directReports from contacts",
					"description": "The contact's direct reports. (The users and contacts that have their manager property set to this contact.) Read-only. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/directReports"
						}
					}
				},
				{
					"name": "Contacts Get Direct Reports",
					"value": "Contacts Get Direct Reports",
					"action": "Get directReports from contacts",
					"description": "The contact's direct reports. (The users and contacts that have their manager property set to this contact.) Read-only. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/directReports/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				},
				{
					"name": "Contacts Get Manager",
					"value": "Contacts Get Manager",
					"action": "orgContact: Get manager",
					"description": "Get the contact's manager",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/manager"
						}
					}
				},
				{
					"name": "Contacts List Member Of",
					"value": "Contacts List Member Of",
					"action": "Get memberOf from contacts",
					"description": "Groups that this contact is a member of. Read-only. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/memberOf"
						}
					}
				},
				{
					"name": "Contacts Get Member Of",
					"value": "Contacts Get Member Of",
					"action": "Get memberOf from contacts",
					"description": "Groups that this contact is a member of. Read-only. Nullable. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/memberOf/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				},
				{
					"name": "Contacts List Transitive Member Of",
					"value": "Contacts List Transitive Member Of",
					"action": "Get transitiveMemberOf from contacts",
					"description": "Get transitiveMemberOf from contacts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/transitiveMemberOf"
						}
					}
				},
				{
					"name": "Contacts Get Transitive Member Of",
					"value": "Contacts Get Transitive Member Of",
					"action": "Get transitiveMemberOf from contacts",
					"description": "Get transitiveMemberOf from contacts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/transitiveMemberOf/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				},
				{
					"name": "Contacts List Transitive Reports",
					"value": "Contacts List Transitive Reports",
					"action": "Get transitiveReports from contacts",
					"description": "The transitive reports for a contact. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/transitiveReports"
						}
					}
				},
				{
					"name": "Contacts Get Transitive Reports",
					"value": "Contacts Get Transitive Reports",
					"action": "Get transitiveReports from contacts",
					"description": "The transitive reports for a contact. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/contacts/{{$parameter[\"orgContact-id\"]}}/transitiveReports/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/directReports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Direct Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Direct Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Direct Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Direct Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Direct Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Direct Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Direct Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Direct Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Direct Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Direct Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/directReports/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Direct Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Direct Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Direct Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Direct Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/manager",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Manager"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Manager"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Manager"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/memberOf",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Member Of"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/memberOf/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Member Of"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/transitiveMemberOf",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Member Of"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Transitive Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Transitive Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Transitive Member Of"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Transitive Member Of"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/transitiveReports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts List Transitive Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /contacts/{orgContact-id}/transitiveReports/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Transitive Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Transitive Reports"
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
						"Contacts Directory Object"
					],
					"operation": [
						"Contacts Get Transitive Reports"
					]
				}
			}
		},
];
