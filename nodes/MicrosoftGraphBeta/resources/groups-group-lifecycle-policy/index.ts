import type { INodeProperties } from 'n8n-workflow';

export const groupsGroupLifecyclePolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Group Lifecycle Policy"
					]
				}
			},
			"options": [
				{
					"name": "Groups List Group Lifecycle Policies",
					"value": "Groups List Group Lifecycle Policies",
					"action": "List groupLifecyclePolicies",
					"description": "Retrieves a list of groupLifecyclePolicy objects to which a group belongs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/groupLifecyclePolicies"
						}
					}
				},
				{
					"name": "Groups Create Group Lifecycle Policies",
					"value": "Groups Create Group Lifecycle Policies",
					"action": "Create new navigation property to groupLifecyclePolicies for groups",
					"description": "Create new navigation property to groupLifecyclePolicies for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/groupLifecyclePolicies"
						}
					}
				},
				{
					"name": "Groups Delete Group Lifecycle Policies",
					"value": "Groups Delete Group Lifecycle Policies",
					"action": "Delete navigation property groupLifecyclePolicies for groups",
					"description": "Delete navigation property groupLifecyclePolicies for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/groupLifecyclePolicies/{{$parameter[\"groupLifecyclePolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Get Group Lifecycle Policies",
					"value": "Groups Get Group Lifecycle Policies",
					"action": "Get groupLifecyclePolicies from groups",
					"description": "The collection of lifecycle policies for this group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/groupLifecyclePolicies/{{$parameter[\"groupLifecyclePolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Update Group Lifecycle Policies",
					"value": "Groups Update Group Lifecycle Policies",
					"action": "Update the navigation property groupLifecyclePolicies in groups",
					"description": "Update the navigation property groupLifecyclePolicies in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/groupLifecyclePolicies/{{$parameter[\"groupLifecyclePolicy-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /groups/{group-id}/groupLifecyclePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups List Group Lifecycle Policies"
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
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups List Group Lifecycle Policies"
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
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups List Group Lifecycle Policies"
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
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups List Group Lifecycle Policies"
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
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups List Group Lifecycle Policies"
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
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups List Group Lifecycle Policies"
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
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups List Group Lifecycle Policies"
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
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups List Group Lifecycle Policies"
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
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups List Group Lifecycle Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/groupLifecyclePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups Create Group Lifecycle Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/groupLifecyclePolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups Create Group Lifecycle Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups Delete Group Lifecycle Policies"
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
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups Delete Group Lifecycle Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups Get Group Lifecycle Policies"
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
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups Get Group Lifecycle Policies"
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
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups Get Group Lifecycle Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups Update Group Lifecycle Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Group Lifecycle Policy"
					],
					"operation": [
						"Groups Update Group Lifecycle Policies"
					]
				}
			}
		},
];
