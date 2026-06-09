import type { INodeProperties } from 'n8n-workflow';

export const directoryRoleTemplatesDirectoryRoleTemplateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Role Templates Directory Role Template"
					]
				}
			},
			"options": [
				{
					"name": "Directory Role Templates Directory Role Template List Directory Role Template",
					"value": "Directory Role Templates Directory Role Template List Directory Role Template",
					"action": "List directoryRoleTemplates",
					"description": "Retrieve a list of directoryroletemplate objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directoryRoleTemplates"
						}
					}
				},
				{
					"name": "Directory Role Templates Directory Role Template Create Directory Role Template",
					"value": "Directory Role Templates Directory Role Template Create Directory Role Template",
					"action": "Add new entity to directoryRoleTemplates",
					"description": "Add new entity to directoryRoleTemplates",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directoryRoleTemplates"
						}
					}
				},
				{
					"name": "Directory Role Templates Directory Role Template Delete Directory Role Template",
					"value": "Directory Role Templates Directory Role Template Delete Directory Role Template",
					"action": "Delete entity from directoryRoleTemplates",
					"description": "Delete entity from directoryRoleTemplates",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directoryRoleTemplates/{{$parameter[\"directoryRoleTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Role Templates Directory Role Template Get Directory Role Template",
					"value": "Directory Role Templates Directory Role Template Get Directory Role Template",
					"action": "Get directoryRoleTemplate",
					"description": "Retrieve the properties and relationships of a directoryroletemplate object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directoryRoleTemplates/{{$parameter[\"directoryRoleTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Role Templates Directory Role Template Update Directory Role Template",
					"value": "Directory Role Templates Directory Role Template Update Directory Role Template",
					"action": "Update entity in directoryRoleTemplates",
					"description": "Update entity in directoryRoleTemplates",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directoryRoleTemplates/{{$parameter[\"directoryRoleTemplate-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directoryRoleTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Role Templates Directory Role Template"
					],
					"operation": [
						"Directory Role Templates Directory Role Template List Directory Role Template"
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
						"Directory Role Templates Directory Role Template"
					],
					"operation": [
						"Directory Role Templates Directory Role Template List Directory Role Template"
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
						"Directory Role Templates Directory Role Template"
					],
					"operation": [
						"Directory Role Templates Directory Role Template List Directory Role Template"
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
						"Directory Role Templates Directory Role Template"
					],
					"operation": [
						"Directory Role Templates Directory Role Template List Directory Role Template"
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
						"Directory Role Templates Directory Role Template"
					],
					"operation": [
						"Directory Role Templates Directory Role Template List Directory Role Template"
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
						"Directory Role Templates Directory Role Template"
					],
					"operation": [
						"Directory Role Templates Directory Role Template List Directory Role Template"
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
						"Directory Role Templates Directory Role Template"
					],
					"operation": [
						"Directory Role Templates Directory Role Template List Directory Role Template"
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
						"Directory Role Templates Directory Role Template"
					],
					"operation": [
						"Directory Role Templates Directory Role Template List Directory Role Template"
					]
				}
			}
		},
		{
			"displayName": "POST /directoryRoleTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Role Templates Directory Role Template"
					],
					"operation": [
						"Directory Role Templates Directory Role Template Create Directory Role Template"
					]
				}
			}
		},
		{
			"displayName": "POST /directoryRoleTemplates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Role Templates Directory Role Template"
					],
					"operation": [
						"Directory Role Templates Directory Role Template Create Directory Role Template"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directoryRoleTemplates/{directoryRoleTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Role Templates Directory Role Template"
					],
					"operation": [
						"Directory Role Templates Directory Role Template Delete Directory Role Template"
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
						"Directory Role Templates Directory Role Template"
					],
					"operation": [
						"Directory Role Templates Directory Role Template Delete Directory Role Template"
					]
				}
			}
		},
		{
			"displayName": "GET /directoryRoleTemplates/{directoryRoleTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Role Templates Directory Role Template"
					],
					"operation": [
						"Directory Role Templates Directory Role Template Get Directory Role Template"
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
						"Directory Role Templates Directory Role Template"
					],
					"operation": [
						"Directory Role Templates Directory Role Template Get Directory Role Template"
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
						"Directory Role Templates Directory Role Template"
					],
					"operation": [
						"Directory Role Templates Directory Role Template Get Directory Role Template"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directoryRoleTemplates/{directoryRoleTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Role Templates Directory Role Template"
					],
					"operation": [
						"Directory Role Templates Directory Role Template Update Directory Role Template"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directoryRoleTemplates/{directoryRoleTemplate-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Role Templates Directory Role Template"
					],
					"operation": [
						"Directory Role Templates Directory Role Template Update Directory Role Template"
					]
				}
			}
		},
];
