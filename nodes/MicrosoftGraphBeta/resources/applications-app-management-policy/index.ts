import type { INodeProperties } from 'n8n-workflow';

export const applicationsAppManagementPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Applications App Management Policy"
					]
				}
			},
			"options": [
				{
					"name": "Applications List App Management Policies",
					"value": "Applications List App Management Policies",
					"action": "Get appManagementPolicies from applications",
					"description": "The appManagementPolicy applied to this application.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/appManagementPolicies"
						}
					}
				},
				{
					"name": "Applications List Ref App Management Policies",
					"value": "Applications List Ref App Management Policies",
					"action": "Get ref of appManagementPolicies from applications",
					"description": "The appManagementPolicy applied to this application.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/appManagementPolicies/$ref"
						}
					}
				},
				{
					"name": "Applications Create Ref App Management Policies",
					"value": "Applications Create Ref App Management Policies",
					"action": "Create new navigation property ref to appManagementPolicies for applications",
					"description": "Create new navigation property ref to appManagementPolicies for applications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/appManagementPolicies/$ref"
						}
					}
				},
				{
					"name": "Applications Delete Ref App Management Policies",
					"value": "Applications Delete Ref App Management Policies",
					"action": "Delete ref of navigation property appManagementPolicies for applications",
					"description": "Delete ref of navigation property appManagementPolicies for applications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/appManagementPolicies/{{$parameter[\"appManagementPolicy-id\"]}}/$ref"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /applications/{application-id}/appManagementPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications App Management Policy"
					],
					"operation": [
						"Applications List App Management Policies"
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
						"Applications App Management Policy"
					],
					"operation": [
						"Applications List App Management Policies"
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
						"Applications App Management Policy"
					],
					"operation": [
						"Applications List App Management Policies"
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
						"Applications App Management Policy"
					],
					"operation": [
						"Applications List App Management Policies"
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
						"Applications App Management Policy"
					],
					"operation": [
						"Applications List App Management Policies"
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
						"Applications App Management Policy"
					],
					"operation": [
						"Applications List App Management Policies"
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
						"Applications App Management Policy"
					],
					"operation": [
						"Applications List App Management Policies"
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
						"Applications App Management Policy"
					],
					"operation": [
						"Applications List App Management Policies"
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
						"Applications App Management Policy"
					],
					"operation": [
						"Applications List App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/appManagementPolicies/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications App Management Policy"
					],
					"operation": [
						"Applications List Ref App Management Policies"
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
						"Applications App Management Policy"
					],
					"operation": [
						"Applications List Ref App Management Policies"
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
						"Applications App Management Policy"
					],
					"operation": [
						"Applications List Ref App Management Policies"
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
						"Applications App Management Policy"
					],
					"operation": [
						"Applications List Ref App Management Policies"
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
						"Applications App Management Policy"
					],
					"operation": [
						"Applications List Ref App Management Policies"
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
						"Applications App Management Policy"
					],
					"operation": [
						"Applications List Ref App Management Policies"
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
						"Applications App Management Policy"
					],
					"operation": [
						"Applications List Ref App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/appManagementPolicies/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications App Management Policy"
					],
					"operation": [
						"Applications Create Ref App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "Odata ID",
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
						"Applications App Management Policy"
					],
					"operation": [
						"Applications Create Ref App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /applications/{application-id}/appManagementPolicies/{appManagementPolicy-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications App Management Policy"
					],
					"operation": [
						"Applications Delete Ref App Management Policies"
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
						"Applications App Management Policy"
					],
					"operation": [
						"Applications Delete Ref App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Applications App Management Policy"
					],
					"operation": [
						"Applications Delete Ref App Management Policies"
					]
				}
			}
		},
];
