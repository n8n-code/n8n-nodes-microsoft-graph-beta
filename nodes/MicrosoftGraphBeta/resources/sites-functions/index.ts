import type { INodeProperties } from 'n8n-workflow';

export const sitesFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					]
				}
			},
			"options": [
				{
					"name": "Sites Delta",
					"value": "Sites Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Sites Site Content Types Get Compatible Hub Content Types",
					"value": "Sites Site Content Types Get Compatible Hub Content Types",
					"action": "Invoke function getCompatibleHubContentTypes",
					"description": "Invoke function getCompatibleHubContentTypes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/microsoft.graph.getCompatibleHubContentTypes()"
						}
					}
				},
				{
					"name": "Sites Site Content Types Content Type Is Published",
					"value": "Sites Site Content Types Content Type Is Published",
					"action": "Invoke function isPublished",
					"description": "Invoke function isPublished",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.isPublished()"
						}
					}
				},
				{
					"name": "Sites Site Lists List Content Types Get Compatible Hub Content Types",
					"value": "Sites Site Lists List Content Types Get Compatible Hub Content Types",
					"action": "Invoke function getCompatibleHubContentTypes",
					"description": "Invoke function getCompatibleHubContentTypes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/microsoft.graph.getCompatibleHubContentTypes()"
						}
					}
				},
				{
					"name": "Sites Site Lists List Content Types Content Type Is Published",
					"value": "Sites Site Lists List Content Types Content Type Is Published",
					"action": "Invoke function isPublished",
					"description": "Invoke function isPublished",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.isPublished()"
						}
					}
				},
				{
					"name": "Sites Site Lists List Items Delta",
					"value": "Sites Site Lists List Items Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "GET Sites Lists Items Microsoft Graph Delta Token Token",
					"value": "GET Sites Lists Items Microsoft Graph Delta Token Token",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/microsoft.graph.delta(token='{{$parameter[\"token\"]}}')"
						}
					}
				},
				{
					"name": "Sites Site Lists List Items List Item Get Activities By Interval",
					"value": "Sites Site Lists List Items List Item Get Activities By Interval",
					"action": "Invoke function getActivitiesByInterval",
					"description": "Invoke function getActivitiesByInterval",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/lists/{{$parameter[\"list-id\"]}}/items/{{$parameter[\"listItem-id\"]}}/microsoft.graph.getActivitiesByInterval(startDateTime='{{$parameter[\"startDateTime\"]}}',endDateTime='{{$parameter[\"endDateTime\"]}}',interval='{{$parameter[\"interval\"]}}')"
						}
					}
				},
				{
					"name": "Sites Site Get Activities By Interval",
					"value": "Sites Site Get Activities By Interval",
					"action": "Invoke function getActivitiesByInterval",
					"description": "Invoke function getActivitiesByInterval",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/microsoft.graph.getActivitiesByInterval(startDateTime='{{$parameter[\"startDateTime\"]}}',endDateTime='{{$parameter[\"endDateTime\"]}}',interval='{{$parameter[\"interval\"]}}')"
						}
					}
				},
				{
					"name": "Sites Site Get Applicable Content Types For List",
					"value": "Sites Site Get Applicable Content Types For List",
					"action": "Invoke function getApplicableContentTypesForList",
					"description": "Invoke function getApplicableContentTypesForList",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/microsoft.graph.getApplicableContentTypesForList(listId='{{$parameter[\"listId\"]}}')"
						}
					}
				},
				{
					"name": "Sites Site Get By Path",
					"value": "Sites Site Get By Path",
					"action": "Invoke function getByPath",
					"description": "Invoke function getByPath",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/microsoft.graph.getByPath(path='{{$parameter[\"path\"]}}')"
						}
					}
				},
				{
					"name": "Sites Site Onenote Notebooks Get Recent Notebooks",
					"value": "Sites Site Onenote Notebooks Get Recent Notebooks",
					"action": "Invoke function getRecentNotebooks",
					"description": "Invoke function getRecentNotebooks",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/microsoft.graph.getRecentNotebooks(includePersonalNotebooks={{$parameter[\"includePersonalNotebooks\"]}})"
						}
					}
				},
				{
					"name": "Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview",
					"value": "Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview",
					"action": "Invoke function preview",
					"description": "Invoke function preview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.preview()"
						}
					}
				},
				{
					"name": "Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Preview",
					"value": "Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Preview",
					"action": "Invoke function preview",
					"description": "Invoke function preview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.preview()"
						}
					}
				},
				{
					"name": "Sites Site Onenote Pages Onenote Page Preview",
					"value": "Sites Site Onenote Pages Onenote Page Preview",
					"action": "Invoke function preview",
					"description": "Invoke function preview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.preview()"
						}
					}
				},
				{
					"name": "Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview",
					"value": "Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview",
					"action": "Invoke function preview",
					"description": "Invoke function preview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.preview()"
						}
					}
				},
				{
					"name": "Sites Site Onenote Sections Onenote Section Pages Onenote Page Preview",
					"value": "Sites Site Onenote Sections Onenote Section Pages Onenote Page Preview",
					"action": "Invoke function preview",
					"description": "Invoke function preview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.preview()"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sites/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Delta"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Delta"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Delta"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Delta"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Delta"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Delta"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Delta"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/contentTypes/microsoft.graph.getCompatibleHubContentTypes()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Content Types Get Compatible Hub Content Types"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Content Types Get Compatible Hub Content Types"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Content Types Get Compatible Hub Content Types"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Content Types Get Compatible Hub Content Types"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Content Types Get Compatible Hub Content Types"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Content Types Get Compatible Hub Content Types"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Content Types Get Compatible Hub Content Types"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Content Types Get Compatible Hub Content Types"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/contentTypes/{contentType-id}/microsoft.graph.isPublished()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Content Types Content Type Is Published"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/contentTypes/microsoft.graph.getCompatibleHubContentTypes()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Content Types Get Compatible Hub Content Types"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Content Types Get Compatible Hub Content Types"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Content Types Get Compatible Hub Content Types"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Content Types Get Compatible Hub Content Types"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Content Types Get Compatible Hub Content Types"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Content Types Get Compatible Hub Content Types"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Content Types Get Compatible Hub Content Types"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Content Types Get Compatible Hub Content Types"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/microsoft.graph.isPublished()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Content Types Content Type Is Published"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items Delta"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items Delta"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items Delta"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items Delta"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items Delta"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items Delta"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items Delta"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/microsoft.graph.delta(token='{token}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"GET Sites Lists Items Microsoft Graph Delta Token Token"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"required": true,
			"description": "Usage: token='{token}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"GET Sites Lists Items Microsoft Graph Delta Token Token"
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
						"Sites Functions"
					],
					"operation": [
						"GET Sites Lists Items Microsoft Graph Delta Token Token"
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
						"Sites Functions"
					],
					"operation": [
						"GET Sites Lists Items Microsoft Graph Delta Token Token"
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
						"Sites Functions"
					],
					"operation": [
						"GET Sites Lists Items Microsoft Graph Delta Token Token"
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
						"Sites Functions"
					],
					"operation": [
						"GET Sites Lists Items Microsoft Graph Delta Token Token"
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
						"Sites Functions"
					],
					"operation": [
						"GET Sites Lists Items Microsoft Graph Delta Token Token"
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
						"Sites Functions"
					],
					"operation": [
						"GET Sites Lists Items Microsoft Graph Delta Token Token"
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
						"Sites Functions"
					],
					"operation": [
						"GET Sites Lists Items Microsoft Graph Delta Token Token"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/lists/{list-id}/items/{listItem-id}/microsoft.graph.getActivitiesByInterval(startDateTime='{startDateTime}',endDateTime='{endDateTime}',interval='{interval}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "Usage: startDateTime='{startDateTime}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "Usage: endDateTime='{endDateTime}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Interval",
			"name": "interval",
			"required": true,
			"description": "Usage: interval='{interval}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Get Activities By Interval"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Get Activities By Interval"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Get Activities By Interval"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Get Activities By Interval"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Get Activities By Interval"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Get Activities By Interval"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Get Activities By Interval"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Lists List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/microsoft.graph.getActivitiesByInterval(startDateTime='{startDateTime}',endDateTime='{endDateTime}',interval='{interval}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "Usage: startDateTime='{startDateTime}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "Usage: endDateTime='{endDateTime}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Interval",
			"name": "interval",
			"required": true,
			"description": "Usage: interval='{interval}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Activities By Interval"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Activities By Interval"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Activities By Interval"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Activities By Interval"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Activities By Interval"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Activities By Interval"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Activities By Interval"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/microsoft.graph.getApplicableContentTypesForList(listId='{listId}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Applicable Content Types For List"
					]
				}
			}
		},
		{
			"displayName": "List ID",
			"name": "listId",
			"required": true,
			"description": "Usage: listId='{listId}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Applicable Content Types For List"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Applicable Content Types For List"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Applicable Content Types For List"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Applicable Content Types For List"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Applicable Content Types For List"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Applicable Content Types For List"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Applicable Content Types For List"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get Applicable Content Types For List"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/microsoft.graph.getByPath(path='{path}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get By Path"
					]
				}
			}
		},
		{
			"displayName": "Path",
			"name": "path",
			"required": true,
			"description": "Usage: path='{path}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Get By Path"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/microsoft.graph.getRecentNotebooks(includePersonalNotebooks={includePersonalNotebooks})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Get Recent Notebooks"
					]
				}
			}
		},
		{
			"displayName": "Include Personal Notebooks",
			"name": "includePersonalNotebooks",
			"required": true,
			"description": "Usage: includePersonalNotebooks={includePersonalNotebooks}",
			"default": false,
			"type": "boolean",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Get Recent Notebooks"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Get Recent Notebooks"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Get Recent Notebooks"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Get Recent Notebooks"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Get Recent Notebooks"
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
						"Sites Functions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Get Recent Notebooks"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.preview()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.preview()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/pages/{onenotePage-id}/microsoft.graph.preview()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Onenote Pages Onenote Page Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.preview()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.preview()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Functions"
					],
					"operation": [
						"Sites Site Onenote Sections Onenote Section Pages Onenote Page Preview"
					]
				}
			}
		},
];
