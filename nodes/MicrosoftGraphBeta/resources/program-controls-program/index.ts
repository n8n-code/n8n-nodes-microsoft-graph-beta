import type { INodeProperties } from 'n8n-workflow';

export const programControlsProgramDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program"
					]
				}
			},
			"options": [
				{
					"name": "Program Controls Delete Program",
					"value": "Program Controls Delete Program",
					"action": "Delete navigation property program for programControls",
					"description": "Delete navigation property program for programControls",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/programControls/{{$parameter[\"programControl-id\"]}}/program"
						}
					}
				},
				{
					"name": "Program Controls Get Program",
					"value": "Program Controls Get Program",
					"action": "Get program from programControls",
					"description": "The program this control is part of.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/programControls/{{$parameter[\"programControl-id\"]}}/program"
						}
					}
				},
				{
					"name": "Program Controls Update Program",
					"value": "Program Controls Update Program",
					"action": "Update the navigation property program in programControls",
					"description": "Update the navigation property program in programControls",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/programControls/{{$parameter[\"programControl-id\"]}}/program"
						}
					}
				},
				{
					"name": "Program Controls Program List Controls",
					"value": "Program Controls Program List Controls",
					"action": "List programControls of a program (deprecated)",
					"description": "In the Azure AD access reviews feature, list all the programControl objects, linked to a particular program.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/programControls/{{$parameter[\"programControl-id\"]}}/program/controls"
						}
					}
				},
				{
					"name": "Program Controls Program Create Controls",
					"value": "Program Controls Program Create Controls",
					"action": "Create new navigation property to controls for programControls",
					"description": "Create new navigation property to controls for programControls",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/programControls/{{$parameter[\"programControl-id\"]}}/program/controls"
						}
					}
				},
				{
					"name": "Program Controls Program Delete Controls",
					"value": "Program Controls Program Delete Controls",
					"action": "Delete navigation property controls for programControls",
					"description": "Delete navigation property controls for programControls",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/programControls/{{$parameter[\"programControl-id\"]}}/program/controls/{{$parameter[\"programControl-id1\"]}}"
						}
					}
				},
				{
					"name": "Program Controls Program Get Controls",
					"value": "Program Controls Program Get Controls",
					"action": "Get controls from programControls",
					"description": "Controls associated with the program.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/programControls/{{$parameter[\"programControl-id\"]}}/program/controls/{{$parameter[\"programControl-id1\"]}}"
						}
					}
				},
				{
					"name": "Program Controls Program Update Controls",
					"value": "Program Controls Program Update Controls",
					"action": "Update the navigation property controls in programControls",
					"description": "Update the navigation property controls in programControls",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/programControls/{{$parameter[\"programControl-id\"]}}/program/controls/{{$parameter[\"programControl-id1\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /programControls/{programControl-id}/program",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Delete Program"
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
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Delete Program"
					]
				}
			}
		},
		{
			"displayName": "GET /programControls/{programControl-id}/program",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Get Program"
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
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Get Program"
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
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Get Program"
					]
				}
			}
		},
		{
			"displayName": "PATCH /programControls/{programControl-id}/program",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Update Program"
					]
				}
			}
		},
		{
			"displayName": "PATCH /programControls/{programControl-id}/program<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Update Program"
					]
				}
			}
		},
		{
			"displayName": "GET /programControls/{programControl-id}/program/controls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program List Controls"
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
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program List Controls"
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
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program List Controls"
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
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program List Controls"
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
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program List Controls"
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
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program List Controls"
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
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program List Controls"
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
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program List Controls"
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
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program List Controls"
					]
				}
			}
		},
		{
			"displayName": "POST /programControls/{programControl-id}/program/controls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program Create Controls"
					]
				}
			}
		},
		{
			"displayName": "POST /programControls/{programControl-id}/program/controls<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program Create Controls"
					]
				}
			}
		},
		{
			"displayName": "DELETE /programControls/{programControl-id}/program/controls/{programControl-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program Delete Controls"
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
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program Delete Controls"
					]
				}
			}
		},
		{
			"displayName": "GET /programControls/{programControl-id}/program/controls/{programControl-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program Get Controls"
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
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program Get Controls"
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
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program Get Controls"
					]
				}
			}
		},
		{
			"displayName": "PATCH /programControls/{programControl-id}/program/controls/{programControl-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program Update Controls"
					]
				}
			}
		},
		{
			"displayName": "PATCH /programControls/{programControl-id}/program/controls/{programControl-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Program Controls Program"
					],
					"operation": [
						"Program Controls Program Update Controls"
					]
				}
			}
		},
];
