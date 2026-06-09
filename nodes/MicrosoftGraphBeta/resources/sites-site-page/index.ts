import type { INodeProperties } from 'n8n-workflow';

export const sitesSitePageDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					]
				}
			},
			"options": [
				{
					"name": "Sites List Pages",
					"value": "Sites List Pages",
					"action": "List the pages in the site pages library of a site",
					"description": "Get the collection of [sitePage][] objects from the site pages [list][] in a site [site][]. All pages in the site are returned (with pagination). Sort alphabetically by `name` in ascending order.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Sites Create Pages",
					"value": "Sites Create Pages",
					"action": "Create a page in the site pages list of a site",
					"description": "Create a new [sitePage][] in the site pages [list][] in a [site][].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages"
						}
					}
				},
				{
					"name": "Sites Delete Pages",
					"value": "Sites Delete Pages",
					"action": "Delete navigation property pages for sites",
					"description": "Delete navigation property pages for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Get Pages",
					"value": "Sites Get Pages",
					"action": "Get pages from sites",
					"description": "The collection of pages in the SitePages list in this site.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Update Pages",
					"value": "Sites Update Pages",
					"action": "Update the navigation property pages in sites",
					"description": "Update the navigation property pages in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Pages Delete Canvas Layout",
					"value": "Sites Pages Delete Canvas Layout",
					"action": "Delete navigation property canvasLayout for sites",
					"description": "Delete navigation property canvasLayout for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout"
						}
					}
				},
				{
					"name": "Sites Pages Get Canvas Layout",
					"value": "Sites Pages Get Canvas Layout",
					"action": "Get canvasLayout from sites",
					"description": "Indicates the layout of the content in a given SharePoint page, including horizontal sections and vertical section",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout"
						}
					}
				},
				{
					"name": "Sites Pages Update Canvas Layout",
					"value": "Sites Pages Update Canvas Layout",
					"action": "Update the navigation property canvasLayout in sites",
					"description": "Update the navigation property canvasLayout in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout List Horizontal Sections",
					"value": "Sites Pages Canvas Layout List Horizontal Sections",
					"action": "List horizontalSections",
					"description": "Get a list of the horizontalSection objects and their properties. Sort by `id` in ascending order.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/horizontalSections"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Create Horizontal Sections",
					"value": "Sites Pages Canvas Layout Create Horizontal Sections",
					"action": "Create new navigation property to horizontalSections for sites",
					"description": "Create new navigation property to horizontalSections for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/horizontalSections"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Delete Horizontal Sections",
					"value": "Sites Pages Canvas Layout Delete Horizontal Sections",
					"action": "Delete navigation property horizontalSections for sites",
					"description": "Delete navigation property horizontalSections for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/horizontalSections/{{$parameter[\"horizontalSection-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Get Horizontal Sections",
					"value": "Sites Pages Canvas Layout Get Horizontal Sections",
					"action": "Get horizontalSections from sites",
					"description": "Collection of horizontal sections on the SharePoint page.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/horizontalSections/{{$parameter[\"horizontalSection-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Update Horizontal Sections",
					"value": "Sites Pages Canvas Layout Update Horizontal Sections",
					"action": "Update the navigation property horizontalSections in sites",
					"description": "Update the navigation property horizontalSections in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/horizontalSections/{{$parameter[\"horizontalSection-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Horizontal Sections List Columns",
					"value": "Sites Pages Canvas Layout Horizontal Sections List Columns",
					"action": "List horizontalSectionColumns",
					"description": "Get a list of the horizontalSectionColumn objects and their properties. Sort by `id` in ascending order.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/horizontalSections/{{$parameter[\"horizontalSection-id\"]}}/columns"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Horizontal Sections Create Columns",
					"value": "Sites Pages Canvas Layout Horizontal Sections Create Columns",
					"action": "Create new navigation property to columns for sites",
					"description": "Create new navigation property to columns for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/horizontalSections/{{$parameter[\"horizontalSection-id\"]}}/columns"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Horizontal Sections Delete Columns",
					"value": "Sites Pages Canvas Layout Horizontal Sections Delete Columns",
					"action": "Delete navigation property columns for sites",
					"description": "Delete navigation property columns for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/horizontalSections/{{$parameter[\"horizontalSection-id\"]}}/columns/{{$parameter[\"horizontalSectionColumn-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Horizontal Sections Get Columns",
					"value": "Sites Pages Canvas Layout Horizontal Sections Get Columns",
					"action": "Get columns from sites",
					"description": "The set of vertical columns in this section.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/horizontalSections/{{$parameter[\"horizontalSection-id\"]}}/columns/{{$parameter[\"horizontalSectionColumn-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Horizontal Sections Update Columns",
					"value": "Sites Pages Canvas Layout Horizontal Sections Update Columns",
					"action": "Update the navigation property columns in sites",
					"description": "Update the navigation property columns in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/horizontalSections/{{$parameter[\"horizontalSection-id\"]}}/columns/{{$parameter[\"horizontalSectionColumn-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Horizontal Sections Columns List Webparts",
					"value": "Sites Pages Canvas Layout Horizontal Sections Columns List Webparts",
					"action": "List webparts",
					"description": "Get the webPart resources from a sitePage. Sort by the order in which they appear on the page.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/horizontalSections/{{$parameter[\"horizontalSection-id\"]}}/columns/{{$parameter[\"horizontalSectionColumn-id\"]}}/webparts"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Horizontal Sections Columns Create Webparts",
					"value": "Sites Pages Canvas Layout Horizontal Sections Columns Create Webparts",
					"action": "Create new navigation property to webparts for sites",
					"description": "Create new navigation property to webparts for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/horizontalSections/{{$parameter[\"horizontalSection-id\"]}}/columns/{{$parameter[\"horizontalSectionColumn-id\"]}}/webparts"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Horizontal Sections Columns Delete Webparts",
					"value": "Sites Pages Canvas Layout Horizontal Sections Columns Delete Webparts",
					"action": "Delete navigation property webparts for sites",
					"description": "Delete navigation property webparts for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/horizontalSections/{{$parameter[\"horizontalSection-id\"]}}/columns/{{$parameter[\"horizontalSectionColumn-id\"]}}/webparts/{{$parameter[\"webPart-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Horizontal Sections Columns Get Webparts",
					"value": "Sites Pages Canvas Layout Horizontal Sections Columns Get Webparts",
					"action": "Get webparts from sites",
					"description": "The collection of WebParts in this column.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/horizontalSections/{{$parameter[\"horizontalSection-id\"]}}/columns/{{$parameter[\"horizontalSectionColumn-id\"]}}/webparts/{{$parameter[\"webPart-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Horizontal Sections Columns Update Webparts",
					"value": "Sites Pages Canvas Layout Horizontal Sections Columns Update Webparts",
					"action": "Update the navigation property webparts in sites",
					"description": "Update the navigation property webparts in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/horizontalSections/{{$parameter[\"horizontalSection-id\"]}}/columns/{{$parameter[\"horizontalSectionColumn-id\"]}}/webparts/{{$parameter[\"webPart-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Delete Vertical Section",
					"value": "Sites Pages Canvas Layout Delete Vertical Section",
					"action": "Delete navigation property verticalSection for sites",
					"description": "Delete navigation property verticalSection for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/verticalSection"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Get Vertical Section",
					"value": "Sites Pages Canvas Layout Get Vertical Section",
					"action": "Get verticalSection",
					"description": "Read the properties and relationships of a verticalSection object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/verticalSection"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Update Vertical Section",
					"value": "Sites Pages Canvas Layout Update Vertical Section",
					"action": "Update the navigation property verticalSection in sites",
					"description": "Update the navigation property verticalSection in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/verticalSection"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Vertical Section List Webparts",
					"value": "Sites Pages Canvas Layout Vertical Section List Webparts",
					"action": "Get webparts from sites",
					"description": "The set of web parts in this section.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/verticalSection/webparts"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Vertical Section Create Webparts",
					"value": "Sites Pages Canvas Layout Vertical Section Create Webparts",
					"action": "Create new navigation property to webparts for sites",
					"description": "Create new navigation property to webparts for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/verticalSection/webparts"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Vertical Section Delete Webparts",
					"value": "Sites Pages Canvas Layout Vertical Section Delete Webparts",
					"action": "Delete navigation property webparts for sites",
					"description": "Delete navigation property webparts for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/verticalSection/webparts/{{$parameter[\"webPart-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Vertical Section Get Webparts",
					"value": "Sites Pages Canvas Layout Vertical Section Get Webparts",
					"action": "Get webparts from sites",
					"description": "The set of web parts in this section.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/verticalSection/webparts/{{$parameter[\"webPart-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Pages Canvas Layout Vertical Section Update Webparts",
					"value": "Sites Pages Canvas Layout Vertical Section Update Webparts",
					"action": "Update the navigation property webparts in sites",
					"description": "Update the navigation property webparts in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/canvasLayout/verticalSection/webparts/{{$parameter[\"webPart-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Pages List Web Parts",
					"value": "Sites Pages List Web Parts",
					"action": "Get webParts from sites",
					"description": "Collection of webparts on the SharePoint page",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/webParts"
						}
					}
				},
				{
					"name": "Sites Pages Create Web Parts",
					"value": "Sites Pages Create Web Parts",
					"action": "Create new navigation property to webParts for sites",
					"description": "Create new navigation property to webParts for sites",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/webParts"
						}
					}
				},
				{
					"name": "Sites Pages Delete Web Parts",
					"value": "Sites Pages Delete Web Parts",
					"action": "Delete navigation property webParts for sites",
					"description": "Delete navigation property webParts for sites",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/webParts/{{$parameter[\"webPart-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Pages Get Web Parts",
					"value": "Sites Pages Get Web Parts",
					"action": "Get webParts from sites",
					"description": "Collection of webparts on the SharePoint page",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/webParts/{{$parameter[\"webPart-id\"]}}"
						}
					}
				},
				{
					"name": "Sites Pages Update Web Parts",
					"value": "Sites Pages Update Web Parts",
					"action": "Update the navigation property webParts in sites",
					"description": "Update the navigation property webParts in sites",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/pages/{{$parameter[\"sitePage-id\"]}}/webParts/{{$parameter[\"webPart-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sites/{site-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites List Pages"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites List Pages"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites List Pages"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites List Pages"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites List Pages"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites List Pages"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites List Pages"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites List Pages"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites List Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/pages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Create Pages"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/pages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Create Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/pages/{sitePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Delete Pages"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Delete Pages"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/pages/{sitePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Get Pages"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Get Pages"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Get Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/pages/{sitePage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Update Pages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/pages/{sitePage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Update Pages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/pages/{sitePage-id}/canvasLayout",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Delete Canvas Layout"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Delete Canvas Layout"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/pages/{sitePage-id}/canvasLayout",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Get Canvas Layout"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Get Canvas Layout"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Get Canvas Layout"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/pages/{sitePage-id}/canvasLayout",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Update Canvas Layout"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/pages/{sitePage-id}/canvasLayout<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Update Canvas Layout"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout List Horizontal Sections"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout List Horizontal Sections"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout List Horizontal Sections"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout List Horizontal Sections"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout List Horizontal Sections"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout List Horizontal Sections"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout List Horizontal Sections"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout List Horizontal Sections"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout List Horizontal Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Create Horizontal Sections"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Create Horizontal Sections"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Delete Horizontal Sections"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Delete Horizontal Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Get Horizontal Sections"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Get Horizontal Sections"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Get Horizontal Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Update Horizontal Sections"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Update Horizontal Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections List Columns"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections List Columns"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections List Columns"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections List Columns"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections List Columns"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections List Columns"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections List Columns"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections List Columns"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections List Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Create Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Create Columns"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Delete Columns"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Delete Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Get Columns"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Get Columns"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Get Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Update Columns"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Update Columns"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns List Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns List Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns List Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns List Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns List Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns List Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns List Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns List Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns List Webparts"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns Create Webparts"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns Create Webparts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns Delete Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns Delete Webparts"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns Get Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns Get Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns Get Webparts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns Update Webparts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/pages/{sitePage-id}/canvasLayout/horizontalSections/{horizontalSection-id}/columns/{horizontalSectionColumn-id}/webparts/{webPart-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Horizontal Sections Columns Update Webparts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/pages/{sitePage-id}/canvasLayout/verticalSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Delete Vertical Section"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Delete Vertical Section"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/pages/{sitePage-id}/canvasLayout/verticalSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Get Vertical Section"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Get Vertical Section"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Get Vertical Section"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/pages/{sitePage-id}/canvasLayout/verticalSection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Update Vertical Section"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/pages/{sitePage-id}/canvasLayout/verticalSection<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Update Vertical Section"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/pages/{sitePage-id}/canvasLayout/verticalSection/webparts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section List Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section List Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section List Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section List Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section List Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section List Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section List Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section List Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section List Webparts"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/pages/{sitePage-id}/canvasLayout/verticalSection/webparts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section Create Webparts"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/pages/{sitePage-id}/canvasLayout/verticalSection/webparts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section Create Webparts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/pages/{sitePage-id}/canvasLayout/verticalSection/webparts/{webPart-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section Delete Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section Delete Webparts"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/pages/{sitePage-id}/canvasLayout/verticalSection/webparts/{webPart-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section Get Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section Get Webparts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section Get Webparts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/pages/{sitePage-id}/canvasLayout/verticalSection/webparts/{webPart-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section Update Webparts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/pages/{sitePage-id}/canvasLayout/verticalSection/webparts/{webPart-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Canvas Layout Vertical Section Update Webparts"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/pages/{sitePage-id}/webParts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages List Web Parts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages List Web Parts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages List Web Parts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages List Web Parts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages List Web Parts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages List Web Parts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages List Web Parts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages List Web Parts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages List Web Parts"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/pages/{sitePage-id}/webParts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Create Web Parts"
					]
				}
			}
		},
		{
			"displayName": "POST /sites/{site-id}/pages/{sitePage-id}/webParts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Create Web Parts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /sites/{site-id}/pages/{sitePage-id}/webParts/{webPart-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Delete Web Parts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Delete Web Parts"
					]
				}
			}
		},
		{
			"displayName": "GET /sites/{site-id}/pages/{sitePage-id}/webParts/{webPart-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Get Web Parts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Get Web Parts"
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
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Get Web Parts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/pages/{sitePage-id}/webParts/{webPart-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Update Web Parts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /sites/{site-id}/pages/{sitePage-id}/webParts/{webPart-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Site Page"
					],
					"operation": [
						"Sites Pages Update Web Parts"
					]
				}
			}
		},
];
