import type { INodeProperties } from 'n8n-workflow';

export const organizationExtensionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Extension"
					]
				}
			},
			"options": [
				{
					"name": "Organization List Extensions",
					"value": "Organization List Extensions",
					"action": "Get extensions from organization",
					"description": "The collection of open extensions defined for the organization resource. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Organization Create Extensions",
					"value": "Organization Create Extensions",
					"action": "Create new navigation property to extensions for organization",
					"description": "Create new navigation property to extensions for organization",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Organization Delete Extensions",
					"value": "Organization Delete Extensions",
					"action": "Delete navigation property extensions for organization",
					"description": "Delete navigation property extensions for organization",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Organization Get Extensions",
					"value": "Organization Get Extensions",
					"action": "Get extensions from organization",
					"description": "The collection of open extensions defined for the organization resource. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Organization Update Extensions",
					"value": "Organization Update Extensions",
					"action": "Update the navigation property extensions in organization",
					"description": "Update the navigation property extensions in organization",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/organization/{{$parameter[\"organization-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /organization/{organization-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Extension"
					],
					"operation": [
						"Organization List Extensions"
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
						"Organization Extension"
					],
					"operation": [
						"Organization List Extensions"
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
						"Organization Extension"
					],
					"operation": [
						"Organization List Extensions"
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
						"Organization Extension"
					],
					"operation": [
						"Organization List Extensions"
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
						"Organization Extension"
					],
					"operation": [
						"Organization List Extensions"
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
						"Organization Extension"
					],
					"operation": [
						"Organization List Extensions"
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
						"Organization Extension"
					],
					"operation": [
						"Organization List Extensions"
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
						"Organization Extension"
					],
					"operation": [
						"Organization List Extensions"
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
						"Organization Extension"
					],
					"operation": [
						"Organization List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /organization/{organization-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Extension"
					],
					"operation": [
						"Organization Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /organization/{organization-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Extension"
					],
					"operation": [
						"Organization Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /organization/{organization-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Extension"
					],
					"operation": [
						"Organization Delete Extensions"
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
						"Organization Extension"
					],
					"operation": [
						"Organization Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /organization/{organization-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Extension"
					],
					"operation": [
						"Organization Get Extensions"
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
						"Organization Extension"
					],
					"operation": [
						"Organization Get Extensions"
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
						"Organization Extension"
					],
					"operation": [
						"Organization Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Extension"
					],
					"operation": [
						"Organization Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /organization/{organization-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organization Extension"
					],
					"operation": [
						"Organization Update Extensions"
					]
				}
			}
		},
];
