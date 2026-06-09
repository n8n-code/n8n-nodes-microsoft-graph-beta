import type { INodeProperties } from 'n8n-workflow';

export const printPrinterShareDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					]
				}
			},
			"options": [
				{
					"name": "Print List Printer Shares",
					"value": "Print List Printer Shares",
					"action": "Get printerShares from print",
					"description": "Get printerShares from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/printerShares"
						}
					}
				},
				{
					"name": "Print Create Printer Shares",
					"value": "Print Create Printer Shares",
					"action": "Create new navigation property to printerShares for print",
					"description": "Create new navigation property to printerShares for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/printerShares"
						}
					}
				},
				{
					"name": "Print Delete Printer Shares",
					"value": "Print Delete Printer Shares",
					"action": "Delete navigation property printerShares for print",
					"description": "Delete navigation property printerShares for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/printerShares/{{$parameter[\"printerShare-id\"]}}"
						}
					}
				},
				{
					"name": "Print Get Printer Shares",
					"value": "Print Get Printer Shares",
					"action": "Get printerShares from print",
					"description": "Get printerShares from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/printerShares/{{$parameter[\"printerShare-id\"]}}"
						}
					}
				},
				{
					"name": "Print Update Printer Shares",
					"value": "Print Update Printer Shares",
					"action": "Update the navigation property printerShares in print",
					"description": "Update the navigation property printerShares in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/printerShares/{{$parameter[\"printerShare-id\"]}}"
						}
					}
				},
				{
					"name": "Print Printer Shares List Allowed Groups",
					"value": "Print Printer Shares List Allowed Groups",
					"action": "List allowedGroups for printerShare",
					"description": "Retrieve a list of groups that have been granted access to submit print jobs to the associated printerShare.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/printerShares/{{$parameter[\"printerShare-id\"]}}/allowedGroups"
						}
					}
				},
				{
					"name": "Print Printer Shares List Ref Allowed Groups",
					"value": "Print Printer Shares List Ref Allowed Groups",
					"action": "List allowedGroups for printerShare",
					"description": "Retrieve a list of groups that have been granted access to submit print jobs to the associated printerShare.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/printerShares/{{$parameter[\"printerShare-id\"]}}/allowedGroups/$ref"
						}
					}
				},
				{
					"name": "Print Printer Shares Create Ref Allowed Groups",
					"value": "Print Printer Shares Create Ref Allowed Groups",
					"action": "Create new navigation property ref to allowedGroups for print",
					"description": "Create new navigation property ref to allowedGroups for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/printerShares/{{$parameter[\"printerShare-id\"]}}/allowedGroups/$ref"
						}
					}
				},
				{
					"name": "Print Printer Shares Delete Ref Allowed Groups",
					"value": "Print Printer Shares Delete Ref Allowed Groups",
					"action": "Delete ref of navigation property allowedGroups for print",
					"description": "Delete ref of navigation property allowedGroups for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/printerShares/{{$parameter[\"printerShare-id\"]}}/allowedGroups/{{$parameter[\"group-id\"]}}/$ref"
						}
					}
				},
				{
					"name": "Print Printer Shares List Allowed Users",
					"value": "Print Printer Shares List Allowed Users",
					"action": "List allowedUsers for printerShare",
					"description": "Retrieve a list of users who have been granted access to submit print jobs to the associated printerShare.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/printerShares/{{$parameter[\"printerShare-id\"]}}/allowedUsers"
						}
					}
				},
				{
					"name": "Print Printer Shares List Ref Allowed Users",
					"value": "Print Printer Shares List Ref Allowed Users",
					"action": "List allowedUsers for printerShare",
					"description": "Retrieve a list of users who have been granted access to submit print jobs to the associated printerShare.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/printerShares/{{$parameter[\"printerShare-id\"]}}/allowedUsers/$ref"
						}
					}
				},
				{
					"name": "Print Printer Shares Create Ref Allowed Users",
					"value": "Print Printer Shares Create Ref Allowed Users",
					"action": "Create new navigation property ref to allowedUsers for print",
					"description": "Create new navigation property ref to allowedUsers for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/printerShares/{{$parameter[\"printerShare-id\"]}}/allowedUsers/$ref"
						}
					}
				},
				{
					"name": "Print Printer Shares Delete Ref Allowed Users",
					"value": "Print Printer Shares Delete Ref Allowed Users",
					"action": "Delete ref of navigation property allowedUsers for print",
					"description": "Delete ref of navigation property allowedUsers for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/printerShares/{{$parameter[\"printerShare-id\"]}}/allowedUsers/{{$parameter[\"user-id\"]}}/$ref"
						}
					}
				},
				{
					"name": "Print Printer Shares Get Printer",
					"value": "Print Printer Shares Get Printer",
					"action": "Get printer from print",
					"description": "The printer that this printer share is related to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/printerShares/{{$parameter[\"printerShare-id\"]}}/printer"
						}
					}
				},
				{
					"name": "Print List Shares",
					"value": "Print List Shares",
					"action": "List shares",
					"description": "Retrieve a list of **printerShares**.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/shares"
						}
					}
				},
				{
					"name": "Print Create Shares",
					"value": "Print Create Shares",
					"action": "Create printerShare",
					"description": "Create a new **printerShare** for the specified printer.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/shares"
						}
					}
				},
				{
					"name": "Print Delete Shares",
					"value": "Print Delete Shares",
					"action": "Delete navigation property shares for print",
					"description": "Delete navigation property shares for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/shares/{{$parameter[\"printerShare-id\"]}}"
						}
					}
				},
				{
					"name": "Print Get Shares",
					"value": "Print Get Shares",
					"action": "Get shares from print",
					"description": "The list of printer shares registered in the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/shares/{{$parameter[\"printerShare-id\"]}}"
						}
					}
				},
				{
					"name": "Print Update Shares",
					"value": "Print Update Shares",
					"action": "Update the navigation property shares in print",
					"description": "Update the navigation property shares in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/shares/{{$parameter[\"printerShare-id\"]}}"
						}
					}
				},
				{
					"name": "Print Shares List Allowed Groups",
					"value": "Print Shares List Allowed Groups",
					"action": "List allowedGroups for printerShare",
					"description": "Retrieve a list of groups that have been granted access to submit print jobs to the associated printerShare.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/shares/{{$parameter[\"printerShare-id\"]}}/allowedGroups"
						}
					}
				},
				{
					"name": "Print Shares List Ref Allowed Groups",
					"value": "Print Shares List Ref Allowed Groups",
					"action": "List allowedGroups for printerShare",
					"description": "Retrieve a list of groups that have been granted access to submit print jobs to the associated printerShare.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/shares/{{$parameter[\"printerShare-id\"]}}/allowedGroups/$ref"
						}
					}
				},
				{
					"name": "Print Shares Create Ref Allowed Groups",
					"value": "Print Shares Create Ref Allowed Groups",
					"action": "Create new navigation property ref to allowedGroups for print",
					"description": "Create new navigation property ref to allowedGroups for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/shares/{{$parameter[\"printerShare-id\"]}}/allowedGroups/$ref"
						}
					}
				},
				{
					"name": "Print Shares Delete Ref Allowed Groups",
					"value": "Print Shares Delete Ref Allowed Groups",
					"action": "Delete ref of navigation property allowedGroups for print",
					"description": "Delete ref of navigation property allowedGroups for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/shares/{{$parameter[\"printerShare-id\"]}}/allowedGroups/{{$parameter[\"group-id\"]}}/$ref"
						}
					}
				},
				{
					"name": "Print Shares List Allowed Users",
					"value": "Print Shares List Allowed Users",
					"action": "List allowedUsers for printerShare",
					"description": "Retrieve a list of users who have been granted access to submit print jobs to the associated printerShare.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/shares/{{$parameter[\"printerShare-id\"]}}/allowedUsers"
						}
					}
				},
				{
					"name": "Print Shares List Ref Allowed Users",
					"value": "Print Shares List Ref Allowed Users",
					"action": "List allowedUsers for printerShare",
					"description": "Retrieve a list of users who have been granted access to submit print jobs to the associated printerShare.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/shares/{{$parameter[\"printerShare-id\"]}}/allowedUsers/$ref"
						}
					}
				},
				{
					"name": "Print Shares Create Ref Allowed Users",
					"value": "Print Shares Create Ref Allowed Users",
					"action": "Create new navigation property ref to allowedUsers for print",
					"description": "Create new navigation property ref to allowedUsers for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/shares/{{$parameter[\"printerShare-id\"]}}/allowedUsers/$ref"
						}
					}
				},
				{
					"name": "Print Shares Delete Ref Allowed Users",
					"value": "Print Shares Delete Ref Allowed Users",
					"action": "Delete ref of navigation property allowedUsers for print",
					"description": "Delete ref of navigation property allowedUsers for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/shares/{{$parameter[\"printerShare-id\"]}}/allowedUsers/{{$parameter[\"user-id\"]}}/$ref"
						}
					}
				},
				{
					"name": "Print Shares Get Printer",
					"value": "Print Shares Get Printer",
					"action": "Get printer from print",
					"description": "The printer that this printer share is related to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/shares/{{$parameter[\"printerShare-id\"]}}/printer"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /print/printerShares",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print List Printer Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print List Printer Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print List Printer Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print List Printer Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print List Printer Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print List Printer Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print List Printer Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print List Printer Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print List Printer Shares"
					]
				}
			}
		},
		{
			"displayName": "POST /print/printerShares",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Create Printer Shares"
					]
				}
			}
		},
		{
			"displayName": "POST /print/printerShares<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Create Printer Shares"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/printerShares/{printerShare-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Delete Printer Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Delete Printer Shares"
					]
				}
			}
		},
		{
			"displayName": "GET /print/printerShares/{printerShare-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Get Printer Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Get Printer Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Get Printer Shares"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/printerShares/{printerShare-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Update Printer Shares"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/printerShares/{printerShare-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Update Printer Shares"
					]
				}
			}
		},
		{
			"displayName": "GET /print/printerShares/{printerShare-id}/allowedGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /print/printerShares/{printerShare-id}/allowedGroups/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Ref Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Ref Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Ref Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Ref Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Ref Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Ref Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Ref Allowed Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /print/printerShares/{printerShare-id}/allowedGroups/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares Create Ref Allowed Groups"
					]
				}
			}
		},
		{
			"displayName": "Odata Id",
			"name": "@odata-id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares Create Ref Allowed Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/printerShares/{printerShare-id}/allowedGroups/{group-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares Delete Ref Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares Delete Ref Allowed Groups"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "%40id",
			"description": "Delete Uri",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "@id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares Delete Ref Allowed Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /print/printerShares/{printerShare-id}/allowedUsers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Allowed Users"
					]
				}
			}
		},
		{
			"displayName": "GET /print/printerShares/{printerShare-id}/allowedUsers/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Ref Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Ref Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Ref Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Ref Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Ref Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Ref Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares List Ref Allowed Users"
					]
				}
			}
		},
		{
			"displayName": "POST /print/printerShares/{printerShare-id}/allowedUsers/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares Create Ref Allowed Users"
					]
				}
			}
		},
		{
			"displayName": "Odata Id",
			"name": "@odata-id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares Create Ref Allowed Users"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/printerShares/{printerShare-id}/allowedUsers/{user-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares Delete Ref Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares Delete Ref Allowed Users"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "%40id",
			"description": "Delete Uri",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "@id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares Delete Ref Allowed Users"
					]
				}
			}
		},
		{
			"displayName": "GET /print/printerShares/{printerShare-id}/printer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares Get Printer"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares Get Printer"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Printer Shares Get Printer"
					]
				}
			}
		},
		{
			"displayName": "GET /print/shares",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print List Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print List Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print List Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print List Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print List Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print List Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print List Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print List Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print List Shares"
					]
				}
			}
		},
		{
			"displayName": "POST /print/shares",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Create Shares"
					]
				}
			}
		},
		{
			"displayName": "POST /print/shares<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Create Shares"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/shares/{printerShare-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Delete Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Delete Shares"
					]
				}
			}
		},
		{
			"displayName": "GET /print/shares/{printerShare-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Get Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Get Shares"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Get Shares"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/shares/{printerShare-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Update Shares"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/shares/{printerShare-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Update Shares"
					]
				}
			}
		},
		{
			"displayName": "GET /print/shares/{printerShare-id}/allowedGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /print/shares/{printerShare-id}/allowedGroups/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Ref Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Ref Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Ref Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Ref Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Ref Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Ref Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Ref Allowed Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /print/shares/{printerShare-id}/allowedGroups/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Shares Create Ref Allowed Groups"
					]
				}
			}
		},
		{
			"displayName": "Odata Id",
			"name": "@odata-id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Shares Create Ref Allowed Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/shares/{printerShare-id}/allowedGroups/{group-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Shares Delete Ref Allowed Groups"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares Delete Ref Allowed Groups"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "%40id",
			"description": "Delete Uri",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "@id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Shares Delete Ref Allowed Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /print/shares/{printerShare-id}/allowedUsers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Allowed Users"
					]
				}
			}
		},
		{
			"displayName": "GET /print/shares/{printerShare-id}/allowedUsers/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Ref Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Ref Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Ref Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Ref Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Ref Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Ref Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares List Ref Allowed Users"
					]
				}
			}
		},
		{
			"displayName": "POST /print/shares/{printerShare-id}/allowedUsers/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Shares Create Ref Allowed Users"
					]
				}
			}
		},
		{
			"displayName": "Odata Id",
			"name": "@odata-id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Shares Create Ref Allowed Users"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/shares/{printerShare-id}/allowedUsers/{user-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Shares Delete Ref Allowed Users"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares Delete Ref Allowed Users"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "%40id",
			"description": "Delete Uri",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "@id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Shares Delete Ref Allowed Users"
					]
				}
			}
		},
		{
			"displayName": "GET /print/shares/{printerShare-id}/printer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer Share"
					],
					"operation": [
						"Print Shares Get Printer"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares Get Printer"
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
						"Print Printer Share"
					],
					"operation": [
						"Print Shares Get Printer"
					]
				}
			}
		},
];
