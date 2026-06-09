import type { INodeProperties } from 'n8n-workflow';

export const directorySettingTemplatesDirectorySettingTemplateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Setting Templates Directory Setting Template"
					]
				}
			},
			"options": [
				{
					"name": "Directory Setting Templates Directory Setting Template List Directory Setting Template",
					"value": "Directory Setting Templates Directory Setting Template List Directory Setting Template",
					"action": "List directorySettingTemplates",
					"description": "Directory setting templates represents a set of templates of directory settings, from which directory settings may be created and used within a tenant.  This operation retrieves the list of available **directorySettingTemplates** objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directorySettingTemplates"
						}
					}
				},
				{
					"name": "Directory Setting Templates Directory Setting Template Create Directory Setting Template",
					"value": "Directory Setting Templates Directory Setting Template Create Directory Setting Template",
					"action": "Add new entity to directorySettingTemplates",
					"description": "Add new entity to directorySettingTemplates",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directorySettingTemplates"
						}
					}
				},
				{
					"name": "Directory Setting Templates Directory Setting Template Delete Directory Setting Template",
					"value": "Directory Setting Templates Directory Setting Template Delete Directory Setting Template",
					"action": "Delete entity from directorySettingTemplates",
					"description": "Delete entity from directorySettingTemplates",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directorySettingTemplates/{{$parameter[\"directorySettingTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Setting Templates Directory Setting Template Get Directory Setting Template",
					"value": "Directory Setting Templates Directory Setting Template Get Directory Setting Template",
					"action": "Get a directory setting template",
					"description": "A directory setting template represents a template of settings from which settings may be created within a tenant. This operation allows retrieval of the properties of the **directorySettingTemplate** object, including the available settings and their defaults.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directorySettingTemplates/{{$parameter[\"directorySettingTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Setting Templates Directory Setting Template Update Directory Setting Template",
					"value": "Directory Setting Templates Directory Setting Template Update Directory Setting Template",
					"action": "Update entity in directorySettingTemplates",
					"description": "Update entity in directorySettingTemplates",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directorySettingTemplates/{{$parameter[\"directorySettingTemplate-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directorySettingTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template List Directory Setting Template"
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
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template List Directory Setting Template"
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
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template List Directory Setting Template"
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
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template List Directory Setting Template"
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
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template List Directory Setting Template"
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
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template List Directory Setting Template"
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
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template List Directory Setting Template"
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
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template List Directory Setting Template"
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
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template List Directory Setting Template"
					]
				}
			}
		},
		{
			"displayName": "POST /directorySettingTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Create Directory Setting Template"
					]
				}
			}
		},
		{
			"displayName": "POST /directorySettingTemplates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Create Directory Setting Template"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directorySettingTemplates/{directorySettingTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Delete Directory Setting Template"
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
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Delete Directory Setting Template"
					]
				}
			}
		},
		{
			"displayName": "GET /directorySettingTemplates/{directorySettingTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Get Directory Setting Template"
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
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Get Directory Setting Template"
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
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Get Directory Setting Template"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directorySettingTemplates/{directorySettingTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Update Directory Setting Template"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directorySettingTemplates/{directorySettingTemplate-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Setting Templates Directory Setting Template"
					],
					"operation": [
						"Directory Setting Templates Directory Setting Template Update Directory Setting Template"
					]
				}
			}
		},
];
