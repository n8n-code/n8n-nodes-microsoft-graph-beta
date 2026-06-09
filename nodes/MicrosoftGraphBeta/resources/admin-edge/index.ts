import type { INodeProperties } from 'n8n-workflow';

export const adminEdgeDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					]
				}
			},
			"options": [
				{
					"name": "Admin Delete Edge",
					"value": "Admin Delete Edge",
					"action": "Delete navigation property edge for admin",
					"description": "Delete navigation property edge for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/edge"
						}
					}
				},
				{
					"name": "Admin Get Edge",
					"value": "Admin Get Edge",
					"action": "Get edge from admin",
					"description": "A container for Microsoft Edge resources. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/edge"
						}
					}
				},
				{
					"name": "Admin Update Edge",
					"value": "Admin Update Edge",
					"action": "Update the navigation property edge in admin",
					"description": "Update the navigation property edge in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/edge"
						}
					}
				},
				{
					"name": "Admin Edge Delete Internet Explorer Mode",
					"value": "Admin Edge Delete Internet Explorer Mode",
					"action": "Delete navigation property internetExplorerMode for admin",
					"description": "Delete navigation property internetExplorerMode for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/edge/internetExplorerMode"
						}
					}
				},
				{
					"name": "Admin Edge Get Internet Explorer Mode",
					"value": "Admin Edge Get Internet Explorer Mode",
					"action": "Get internetExplorerMode from admin",
					"description": "A container for Internet Explorer mode resources.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/edge/internetExplorerMode"
						}
					}
				},
				{
					"name": "Admin Edge Update Internet Explorer Mode",
					"value": "Admin Edge Update Internet Explorer Mode",
					"action": "Update the navigation property internetExplorerMode in admin",
					"description": "Update the navigation property internetExplorerMode in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/edge/internetExplorerMode"
						}
					}
				},
				{
					"name": "Admin Edge Internet Explorer Mode List Site Lists",
					"value": "Admin Edge Internet Explorer Mode List Site Lists",
					"action": "List browserSiteLists",
					"description": "Get a list of the browserSiteList objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/edge/internetExplorerMode/siteLists"
						}
					}
				},
				{
					"name": "Admin Edge Internet Explorer Mode Create Site Lists",
					"value": "Admin Edge Internet Explorer Mode Create Site Lists",
					"action": "Create browserSiteList",
					"description": "Create a new browserSiteList object to support Internet Explorer mode.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/edge/internetExplorerMode/siteLists"
						}
					}
				},
				{
					"name": "Admin Edge Internet Explorer Mode Delete Site Lists",
					"value": "Admin Edge Internet Explorer Mode Delete Site Lists",
					"action": "Delete navigation property siteLists for admin",
					"description": "Delete navigation property siteLists for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/edge/internetExplorerMode/siteLists/{{$parameter[\"browserSiteList-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Edge Internet Explorer Mode Get Site Lists",
					"value": "Admin Edge Internet Explorer Mode Get Site Lists",
					"action": "Get siteLists from admin",
					"description": "A collection of site lists to support Internet Explorer mode.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/edge/internetExplorerMode/siteLists/{{$parameter[\"browserSiteList-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Edge Internet Explorer Mode Update Site Lists",
					"value": "Admin Edge Internet Explorer Mode Update Site Lists",
					"action": "Update the navigation property siteLists in admin",
					"description": "Update the navigation property siteLists in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/edge/internetExplorerMode/siteLists/{{$parameter[\"browserSiteList-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Edge Internet Explorer Mode Site Lists List Shared Cookies",
					"value": "Admin Edge Internet Explorer Mode Site Lists List Shared Cookies",
					"action": "List browserSharedCookies",
					"description": "Get a list of the browserSharedCookie objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/edge/internetExplorerMode/siteLists/{{$parameter[\"browserSiteList-id\"]}}/sharedCookies"
						}
					}
				},
				{
					"name": "Admin Edge Internet Explorer Mode Site Lists Create Shared Cookies",
					"value": "Admin Edge Internet Explorer Mode Site Lists Create Shared Cookies",
					"action": "Create browserSharedCookie",
					"description": "Create a new browserSharedCookie object in a browserSiteList.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/edge/internetExplorerMode/siteLists/{{$parameter[\"browserSiteList-id\"]}}/sharedCookies"
						}
					}
				},
				{
					"name": "Admin Edge Internet Explorer Mode Site Lists Delete Shared Cookies",
					"value": "Admin Edge Internet Explorer Mode Site Lists Delete Shared Cookies",
					"action": "Delete navigation property sharedCookies for admin",
					"description": "Delete navigation property sharedCookies for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/edge/internetExplorerMode/siteLists/{{$parameter[\"browserSiteList-id\"]}}/sharedCookies/{{$parameter[\"browserSharedCookie-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Edge Internet Explorer Mode Site Lists Get Shared Cookies",
					"value": "Admin Edge Internet Explorer Mode Site Lists Get Shared Cookies",
					"action": "Get sharedCookies from admin",
					"description": "A collection of shared cookies defined for the site list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/edge/internetExplorerMode/siteLists/{{$parameter[\"browserSiteList-id\"]}}/sharedCookies/{{$parameter[\"browserSharedCookie-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Edge Internet Explorer Mode Site Lists Update Shared Cookies",
					"value": "Admin Edge Internet Explorer Mode Site Lists Update Shared Cookies",
					"action": "Update the navigation property sharedCookies in admin",
					"description": "Update the navigation property sharedCookies in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/edge/internetExplorerMode/siteLists/{{$parameter[\"browserSiteList-id\"]}}/sharedCookies/{{$parameter[\"browserSharedCookie-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Edge Internet Explorer Mode Site Lists List Sites",
					"value": "Admin Edge Internet Explorer Mode Site Lists List Sites",
					"action": "List browserSites",
					"description": "Get a list of the browserSite objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/edge/internetExplorerMode/siteLists/{{$parameter[\"browserSiteList-id\"]}}/sites"
						}
					}
				},
				{
					"name": "Admin Edge Internet Explorer Mode Site Lists Create Sites",
					"value": "Admin Edge Internet Explorer Mode Site Lists Create Sites",
					"action": "Create browserSite",
					"description": "Create a new browserSite object in a browserSiteList.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/admin/edge/internetExplorerMode/siteLists/{{$parameter[\"browserSiteList-id\"]}}/sites"
						}
					}
				},
				{
					"name": "Admin Edge Internet Explorer Mode Site Lists Delete Sites",
					"value": "Admin Edge Internet Explorer Mode Site Lists Delete Sites",
					"action": "Delete navigation property sites for admin",
					"description": "Delete navigation property sites for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/edge/internetExplorerMode/siteLists/{{$parameter[\"browserSiteList-id\"]}}/sites/{{$parameter[\"browserSite-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Edge Internet Explorer Mode Site Lists Get Sites",
					"value": "Admin Edge Internet Explorer Mode Site Lists Get Sites",
					"action": "Get sites from admin",
					"description": "A collection of sites defined for the site list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/edge/internetExplorerMode/siteLists/{{$parameter[\"browserSiteList-id\"]}}/sites/{{$parameter[\"browserSite-id\"]}}"
						}
					}
				},
				{
					"name": "Admin Edge Internet Explorer Mode Site Lists Update Sites",
					"value": "Admin Edge Internet Explorer Mode Site Lists Update Sites",
					"action": "Update the navigation property sites in admin",
					"description": "Update the navigation property sites in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/edge/internetExplorerMode/siteLists/{{$parameter[\"browserSiteList-id\"]}}/sites/{{$parameter[\"browserSite-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /admin/edge",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Delete Edge"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Delete Edge"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/edge",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Get Edge"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Get Edge"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Get Edge"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/edge",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Update Edge"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/edge<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Update Edge"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/edge/internetExplorerMode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Delete Internet Explorer Mode"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Delete Internet Explorer Mode"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/edge/internetExplorerMode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Get Internet Explorer Mode"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Get Internet Explorer Mode"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Get Internet Explorer Mode"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/edge/internetExplorerMode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Update Internet Explorer Mode"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/edge/internetExplorerMode<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Update Internet Explorer Mode"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/edge/internetExplorerMode/siteLists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode List Site Lists"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode List Site Lists"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode List Site Lists"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode List Site Lists"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode List Site Lists"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode List Site Lists"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode List Site Lists"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode List Site Lists"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode List Site Lists"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/edge/internetExplorerMode/siteLists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Create Site Lists"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/edge/internetExplorerMode/siteLists<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Create Site Lists"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Delete Site Lists"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Delete Site Lists"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Get Site Lists"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Get Site Lists"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Get Site Lists"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Update Site Lists"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Update Site Lists"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Shared Cookies"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Shared Cookies"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Shared Cookies"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Shared Cookies"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Shared Cookies"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Shared Cookies"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Shared Cookies"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Shared Cookies"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Shared Cookies"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Create Shared Cookies"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Create Shared Cookies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Delete Shared Cookies"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Delete Shared Cookies"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Get Shared Cookies"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Get Shared Cookies"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Get Shared Cookies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Update Shared Cookies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sharedCookies/{browserSharedCookie-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Update Shared Cookies"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Sites"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Sites"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Sites"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Sites"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Sites"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Sites"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Sites"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Sites"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists List Sites"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Create Sites"
					]
				}
			}
		},
		{
			"displayName": "POST /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Create Sites"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Delete Sites"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Delete Sites"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Get Sites"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Get Sites"
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
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Get Sites"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Update Sites"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/edge/internetExplorerMode/siteLists/{browserSiteList-id}/sites/{browserSite-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Edge"
					],
					"operation": [
						"Admin Edge Internet Explorer Mode Site Lists Update Sites"
					]
				}
			}
		},
];
