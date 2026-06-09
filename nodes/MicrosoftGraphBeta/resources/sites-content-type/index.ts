import type { INodeProperties } from 'n8n-workflow';

export const sitesContentTypeDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					]
				}
			},
			"options": [
				{
					"name": "Sites List Content Types",
					"value": "Sites List Content Types",
					"action": "List contentTypes in a site",
					"description": "Get the collection of [contentType][contentType] resources in a [site][].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes"
						}
					}
				},
				{
					"name": "Sites Create Content Types",
					"value": "Sites Create Content Types",
					"action": "Create contentType",
					"description": "Create a new [contentType][] for a [site][].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes"
						}
					}
				},
				{
					"name": "Sites Delete Content Types",
					"value": "Sites Delete Content Types",
					"action": "Delete navigation property contentTypes for sites",
					"description": "Delete navigation property contentTypes for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Get Content Types",
					"value": "Sites Get Content Types",
					"action": "Get contentTypes from sites",
					"description": "The collection of content types defined for this site.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Update Content Types",
					"value": "Sites Update Content Types",
					"action": "Update the navigation property contentTypes in sites",
					"description": "Update the navigation property contentTypes in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Content Types Get Base",
					"value": "Sites Content Types Get Base",
					"action": "Get base from sites",
					"description": "Parent contentType from which this content type is derived.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/base"
						}
					}
				},
				{
					"name": "Sites Content Types List Base Types",
					"value": "Sites Content Types List Base Types",
					"action": "Get baseTypes from sites",
					"description": "The collection of content types that are ancestors of this content type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/baseTypes"
						}
					}
				},
				{
					"name": "Sites Content Types Get Base Types",
					"value": "Sites Content Types Get Base Types",
					"action": "Get baseTypes from sites",
					"description": "The collection of content types that are ancestors of this content type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/baseTypes/{{$parameter[\"contentType-id1\"]}}"
						}
					}
				},
				{
					"name": "Sites Content Types List Column Links",
					"value": "Sites Content Types List Column Links",
					"action": "Get columnLinks from sites",
					"description": "The collection of columns that are required by this content type",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks"
						}
					}
				},
				{
					"name": "Sites Content Types Create Column Links",
					"value": "Sites Content Types Create Column Links",
					"action": "Create new navigation property to columnLinks for sites",
					"description": "Create new navigation property to columnLinks for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks"
						}
					}
				},
				{
					"name": "Sites Content Types Delete Column Links",
					"value": "Sites Content Types Delete Column Links",
					"action": "Delete navigation property columnLinks for sites",
					"description": "Delete navigation property columnLinks for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks/{{$parameter[\"columnLink-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Content Types Get Column Links",
					"value": "Sites Content Types Get Column Links",
					"action": "Get columnLinks from sites",
					"description": "The collection of columns that are required by this content type",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks/{{$parameter[\"columnLink-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Content Types Update Column Links",
					"value": "Sites Content Types Update Column Links",
					"action": "Update the navigation property columnLinks in sites",
					"description": "Update the navigation property columnLinks in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columnLinks/{{$parameter[\"columnLink-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Content Types List Column Positions",
					"value": "Sites Content Types List Column Positions",
					"action": "Get columnPositions from sites",
					"description": "Column order information in a content type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columnPositions"
						}
					}
				},
				{
					"name": "Sites Content Types Get Column Positions",
					"value": "Sites Content Types Get Column Positions",
					"action": "Get columnPositions from sites",
					"description": "Column order information in a content type.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columnPositions/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Content Types List Columns",
					"value": "Sites Content Types List Columns",
					"action": "List columns in a content type",
					"description": "Get the collection of columns, represented as [columnDefinition][columnDefinition] resources, in a [content type][contentType].",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columns"
						}
					}
				},
				{
					"name": "Sites Content Types Create Columns",
					"value": "Sites Content Types Create Columns",
					"action": "Create columnDefinition for a content type",
					"description": "Add a column to a [content type][contentType] in a site or list by specifying a [columnDefinition][columnDefinition].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columns"
						}
					}
				},
				{
					"name": "Sites Content Types Delete Columns",
					"value": "Sites Content Types Delete Columns",
					"action": "Delete navigation property columns for sites",
					"description": "Delete navigation property columns for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Content Types Get Columns",
					"value": "Sites Content Types Get Columns",
					"action": "Get columns from sites",
					"description": "The collection of column definitions for this contentType.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Content Types Update Columns",
					"value": "Sites Content Types Update Columns",
					"action": "Update the navigation property columns in sites",
					"description": "Update the navigation property columns in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Content Types Columns Get Source Column",
					"value": "Sites Content Types Columns Get Source Column",
					"action": "Get sourceColumn from sites",
					"description": "The source column for content type column.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/contentTypes/{{$parameter[\"contentType-id\"]}}/columns/{{$parameter[\"columnDefinition-id\"]}}/sourceColumn"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sites/{site-id}/contentTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites List Content Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites List Content Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites List Content Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites List Content Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites List Content Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites List Content Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites List Content Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites List Content Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites List Content Types"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/contentTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Create Content Types"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/contentTypes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Create Content Types"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/contentTypes/{contentType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Delete Content Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Delete Content Types"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/contentTypes/{contentType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Get Content Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Get Content Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Get Content Types"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/contentTypes/{contentType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Update Content Types"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/contentTypes/{contentType-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Update Content Types"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/contentTypes/{contentType-id}/base",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Get Base"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Get Base"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Get Base"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/contentTypes/{contentType-id}/baseTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Base Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Base Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Base Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Base Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Base Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Base Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Base Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Base Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Base Types"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Get Base Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Get Base Types"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Get Base Types"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/contentTypes/{contentType-id}/columnLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Links"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Links"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Links"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Links"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Links"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Links"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Links"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Links"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Links"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/contentTypes/{contentType-id}/columnLinks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Create Column Links"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/contentTypes/{contentType-id}/columnLinks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Create Column Links"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Delete Column Links"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Delete Column Links"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Get Column Links"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Get Column Links"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Get Column Links"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Update Column Links"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/contentTypes/{contentType-id}/columnLinks/{columnLink-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Update Column Links"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/contentTypes/{contentType-id}/columnPositions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Positions"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Positions"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Positions"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Positions"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Positions"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Positions"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Positions"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Positions"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Column Positions"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/contentTypes/{contentType-id}/columnPositions/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Get Column Positions"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Get Column Positions"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Get Column Positions"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/contentTypes/{contentType-id}/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Columns"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Columns"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Columns"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Columns"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Columns"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Columns"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Columns"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Columns"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types List Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/contentTypes/{contentType-id}/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Create Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/contentTypes/{contentType-id}/columns<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Create Columns"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Delete Columns"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Delete Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Get Columns"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Get Columns"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Get Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Update Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Update Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/contentTypes/{contentType-id}/columns/{columnDefinition-id}/sourceColumn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Columns Get Source Column"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Columns Get Source Column"
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
						"Sites Content Type"
					],
					"operation": [
						"Sites Content Types Columns Get Source Column"
					]
				}
			}
		},
];
