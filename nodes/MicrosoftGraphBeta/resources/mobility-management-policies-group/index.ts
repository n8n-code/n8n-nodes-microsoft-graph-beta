import type { INodeProperties } from 'n8n-workflow';

export const mobilityManagementPoliciesGroupDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Mobility Management Policies Group"
					]
				}
			},
			"options": [
				{
					"name": "Mobility Management Policies List Included Groups",
					"value": "Mobility Management Policies List Included Groups",
					"action": "List includedGroups",
					"description": "Get the list of groups that are included in a mobile app management policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/mobilityManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}/includedGroups"
						}
					}
				},
				{
					"name": "Mobility Management Policies List Ref Included Groups",
					"value": "Mobility Management Policies List Ref Included Groups",
					"action": "List includedGroups",
					"description": "Get the list of groups that are included in a mobile app management policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/mobilityManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}/includedGroups/$ref"
						}
					}
				},
				{
					"name": "Mobility Management Policies Create Ref Included Groups",
					"value": "Mobility Management Policies Create Ref Included Groups",
					"action": "Create new navigation property ref to includedGroups for mobilityManagementPolicies",
					"description": "Create new navigation property ref to includedGroups for mobilityManagementPolicies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/mobilityManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}/includedGroups/$ref"
						}
					}
				},
				{
					"name": "Mobility Management Policies Delete Ref Included Groups",
					"value": "Mobility Management Policies Delete Ref Included Groups",
					"action": "Delete ref of navigation property includedGroups for mobilityManagementPolicies",
					"description": "Delete ref of navigation property includedGroups for mobilityManagementPolicies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/mobilityManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}/includedGroups/{{$parameter[\"group-id\"]}}/$ref"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies List Included Groups"
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
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies List Included Groups"
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
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies List Included Groups"
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
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies List Included Groups"
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
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies List Included Groups"
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
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies List Included Groups"
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
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies List Included Groups"
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
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies List Included Groups"
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
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies List Included Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies List Ref Included Groups"
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
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies List Ref Included Groups"
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
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies List Ref Included Groups"
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
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies List Ref Included Groups"
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
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies List Ref Included Groups"
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
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies List Ref Included Groups"
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
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies List Ref Included Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies Create Ref Included Groups"
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
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies Create Ref Included Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /mobilityManagementPolicies/{mobilityManagementPolicy-id}/includedGroups/{group-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies Delete Ref Included Groups"
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
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies Delete Ref Included Groups"
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
						"Mobility Management Policies Group"
					],
					"operation": [
						"Mobility Management Policies Delete Ref Included Groups"
					]
				}
			}
		},
];
