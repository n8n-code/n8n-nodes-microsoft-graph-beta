import type { INodeProperties } from 'n8n-workflow';

export const groupLifecyclePoliciesGroupLifecyclePolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Group Lifecycle Policies Group Lifecycle Policy"
					]
				}
			},
			"options": [
				{
					"name": "Group Lifecycle Policies Group Lifecycle Policy List Group Lifecycle Policy",
					"value": "Group Lifecycle Policies Group Lifecycle Policy List Group Lifecycle Policy",
					"action": "List groupLifecyclePolicies",
					"description": "List all the groupLifecyclePolicies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groupLifecyclePolicies"
						}
					}
				},
				{
					"name": "Group Lifecycle Policies Group Lifecycle Policy Create Group Lifecycle Policy",
					"value": "Group Lifecycle Policies Group Lifecycle Policy Create Group Lifecycle Policy",
					"action": "Create groupLifecyclePolicy",
					"description": "Creates a new groupLifecyclePolicy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groupLifecyclePolicies"
						}
					}
				},
				{
					"name": "Group Lifecycle Policies Group Lifecycle Policy Delete Group Lifecycle Policy",
					"value": "Group Lifecycle Policies Group Lifecycle Policy Delete Group Lifecycle Policy",
					"action": "Delete groupLifecyclePolicy",
					"description": "Delete a groupLifecyclePolicy.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groupLifecyclePolicies/{{$parameter[\"groupLifecyclePolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Group Lifecycle Policies Group Lifecycle Policy Get Group Lifecycle Policy",
					"value": "Group Lifecycle Policies Group Lifecycle Policy Get Group Lifecycle Policy",
					"action": "Get groupLifecyclePolicy",
					"description": "Retrieve the properties and relationships of a groupLifecyclePolicies object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groupLifecyclePolicies/{{$parameter[\"groupLifecyclePolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Group Lifecycle Policies Group Lifecycle Policy Update Group Lifecycle Policy",
					"value": "Group Lifecycle Policies Group Lifecycle Policy Update Group Lifecycle Policy",
					"action": "Update groupLifecyclePolicy",
					"description": "Update the properties of a groupLifecyclePolicygroupLifecyclePolicy resource type object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groupLifecyclePolicies/{{$parameter[\"groupLifecyclePolicy-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /groupLifecyclePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy List Group Lifecycle Policy"
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
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy List Group Lifecycle Policy"
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
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy List Group Lifecycle Policy"
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
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy List Group Lifecycle Policy"
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
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy List Group Lifecycle Policy"
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
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy List Group Lifecycle Policy"
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
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy List Group Lifecycle Policy"
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
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy List Group Lifecycle Policy"
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
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy List Group Lifecycle Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /groupLifecyclePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy Create Group Lifecycle Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /groupLifecyclePolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy Create Group Lifecycle Policy"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groupLifecyclePolicies/{groupLifecyclePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy Delete Group Lifecycle Policy"
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
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy Delete Group Lifecycle Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /groupLifecyclePolicies/{groupLifecyclePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy Get Group Lifecycle Policy"
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
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy Get Group Lifecycle Policy"
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
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy Get Group Lifecycle Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groupLifecyclePolicies/{groupLifecyclePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy Update Group Lifecycle Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groupLifecyclePolicies/{groupLifecyclePolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group Lifecycle Policies Group Lifecycle Policy"
					],
					"operation": [
						"Group Lifecycle Policies Group Lifecycle Policy Update Group Lifecycle Policy"
					]
				}
			}
		},
];
