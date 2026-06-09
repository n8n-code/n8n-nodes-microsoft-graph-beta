import type { INodeProperties } from 'n8n-workflow';

export const onPremisesPublishingProfilesOnPremisesPublishingProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles On Premises Publishing Profile"
					]
				}
			},
			"options": [
				{
					"name": "On Premises Publishing Profiles On Premises Publishing Profile List On Premises Publishing Profile",
					"value": "On Premises Publishing Profiles On Premises Publishing Profile List On Premises Publishing Profile",
					"action": "Get entities from onPremisesPublishingProfiles",
					"description": "Get entities from onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onPremisesPublishingProfiles"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles On Premises Publishing Profile Create On Premises Publishing Profile",
					"value": "On Premises Publishing Profiles On Premises Publishing Profile Create On Premises Publishing Profile",
					"action": "Add new entity to onPremisesPublishingProfiles",
					"description": "Add new entity to onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/onPremisesPublishingProfiles"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles On Premises Publishing Profile Delete On Premises Publishing Profile",
					"value": "On Premises Publishing Profiles On Premises Publishing Profile Delete On Premises Publishing Profile",
					"action": "Delete entity from onPremisesPublishingProfiles",
					"description": "Delete entity from onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles On Premises Publishing Profile Get On Premises Publishing Profile",
					"value": "On Premises Publishing Profiles On Premises Publishing Profile Get On Premises Publishing Profile",
					"action": "Get entity from onPremisesPublishingProfiles by key",
					"description": "Get entity from onPremisesPublishingProfiles by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles On Premises Publishing Profile Update On Premises Publishing Profile",
					"value": "On Premises Publishing Profiles On Premises Publishing Profile Update On Premises Publishing Profile",
					"action": "Update entity in onPremisesPublishingProfiles",
					"description": "Update entity in onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /onPremisesPublishingProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile List On Premises Publishing Profile"
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
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile List On Premises Publishing Profile"
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
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile List On Premises Publishing Profile"
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
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile List On Premises Publishing Profile"
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
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile List On Premises Publishing Profile"
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
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile List On Premises Publishing Profile"
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
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile List On Premises Publishing Profile"
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
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile List On Premises Publishing Profile"
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
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile List On Premises Publishing Profile"
					]
				}
			}
		},
		{
			"displayName": "POST /onPremisesPublishingProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile Create On Premises Publishing Profile"
					]
				}
			}
		},
		{
			"displayName": "POST /onPremisesPublishingProfiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile Create On Premises Publishing Profile"
					]
				}
			}
		},
		{
			"displayName": "DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile Delete On Premises Publishing Profile"
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
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile Delete On Premises Publishing Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile Get On Premises Publishing Profile"
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
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile Get On Premises Publishing Profile"
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
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile Get On Premises Publishing Profile"
					]
				}
			}
		},
		{
			"displayName": "PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile Update On Premises Publishing Profile"
					]
				}
			}
		},
		{
			"displayName": "PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles On Premises Publishing Profile"
					],
					"operation": [
						"On Premises Publishing Profiles On Premises Publishing Profile Update On Premises Publishing Profile"
					]
				}
			}
		},
];
