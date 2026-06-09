import type { INodeProperties } from 'n8n-workflow';

export const meFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					]
				}
			},
			"options": [
				{
					"name": "Me Activities Recent",
					"value": "Me Activities Recent",
					"action": "Invoke function recent",
					"description": "Invoke function recent",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/activities/microsoft.graph.recent()"
						}
					}
				},
				{
					"name": "Me App Consent Requests For Approval Filter By Current User",
					"value": "Me App Consent Requests For Approval Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/appConsentRequestsForApproval/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Me App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User",
					"value": "Me App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/appConsentRequestsForApproval/{{$parameter[\"appConsentRequest-id\"]}}/userConsentRequests/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Me Approvals Filter By Current User",
					"value": "Me Approvals Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/approvals/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Me Calendar Calendar View Delta",
					"value": "Me Calendar Calendar View Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendar/calendarView/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Calendar View Event Exception Occurrences Delta",
					"value": "Me Calendar Calendar View Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Calendar View Event Exception Occurrences Event Instances Delta",
					"value": "Me Calendar Calendar View Event Exception Occurrences Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendar/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Calendar View Event Instances Delta",
					"value": "Me Calendar Calendar View Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Calendar View Event Instances Event Exception Occurrences Delta",
					"value": "Me Calendar Calendar View Event Instances Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendar/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Events Delta",
					"value": "Me Calendar Events Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendar/events/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Events Event Exception Occurrences Delta",
					"value": "Me Calendar Events Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Events Event Exception Occurrences Event Instances Delta",
					"value": "Me Calendar Events Event Exception Occurrences Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendar/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Events Event Instances Delta",
					"value": "Me Calendar Events Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendar/events/{{$parameter[\"event-id\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Events Event Instances Event Exception Occurrences Delta",
					"value": "Me Calendar Events Event Instances Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendar/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Allowed Calendar Sharing Roles",
					"value": "Me Calendar Allowed Calendar Sharing Roles",
					"action": "Invoke function allowedCalendarSharingRoles",
					"description": "Invoke function allowedCalendarSharingRoles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendar/microsoft.graph.allowedCalendarSharingRoles(User='{{$parameter[\"User\"]}}')"
						}
					}
				},
				{
					"name": "Me Calendar Groups Calendar Group Calendars Calendar Calendar View Delta",
					"value": "Me Calendar Groups Calendar Group Calendars Calendar Calendar View Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta",
					"value": "Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta",
					"value": "Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta",
					"value": "Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta",
					"value": "Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Groups Calendar Group Calendars Calendar Events Delta",
					"value": "Me Calendar Groups Calendar Group Calendars Calendar Events Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/events/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta",
					"value": "Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta",
					"value": "Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta",
					"value": "Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta",
					"value": "Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles",
					"value": "Me Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles",
					"action": "Invoke function allowedCalendarSharingRoles",
					"description": "Invoke function allowedCalendarSharingRoles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendarGroups/{{$parameter[\"calendarGroup-id\"]}}/calendars/{{$parameter[\"calendar-id\"]}}/microsoft.graph.allowedCalendarSharingRoles(User='{{$parameter[\"User\"]}}')"
						}
					}
				},
				{
					"name": "Me Calendar View Delta",
					"value": "Me Calendar View Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendarView/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar View Event Exception Occurrences Delta",
					"value": "Me Calendar View Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar View Event Exception Occurrences Event Instances Delta",
					"value": "Me Calendar View Event Exception Occurrences Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar View Event Instances Delta",
					"value": "Me Calendar View Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendarView/{{$parameter[\"event-id\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendar View Event Instances Event Exception Occurrences Delta",
					"value": "Me Calendar View Event Instances Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendars Calendar Calendar View Delta",
					"value": "Me Calendars Calendar Calendar View Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendars Calendar Calendar View Event Exception Occurrences Delta",
					"value": "Me Calendars Calendar Calendar View Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta",
					"value": "Me Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendars Calendar Calendar View Event Instances Delta",
					"value": "Me Calendars Calendar Calendar View Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta",
					"value": "Me Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendars/{{$parameter[\"calendar-id\"]}}/calendarView/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendars Calendar Events Delta",
					"value": "Me Calendars Calendar Events Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendars/{{$parameter[\"calendar-id\"]}}/events/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendars Calendar Events Event Exception Occurrences Delta",
					"value": "Me Calendars Calendar Events Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendars/{{$parameter[\"calendar-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendars Calendar Events Event Exception Occurrences Event Instances Delta",
					"value": "Me Calendars Calendar Events Event Exception Occurrences Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendars/{{$parameter[\"calendar-id\"]}}/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendars Calendar Events Event Instances Delta",
					"value": "Me Calendars Calendar Events Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendars/{{$parameter[\"calendar-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendars Calendar Events Event Instances Event Exception Occurrences Delta",
					"value": "Me Calendars Calendar Events Event Instances Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendars/{{$parameter[\"calendar-id\"]}}/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Calendars Calendar Allowed Calendar Sharing Roles",
					"value": "Me Calendars Calendar Allowed Calendar Sharing Roles",
					"action": "Invoke function allowedCalendarSharingRoles",
					"description": "Invoke function allowedCalendarSharingRoles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/calendars/{{$parameter[\"calendar-id\"]}}/microsoft.graph.allowedCalendarSharingRoles(User='{{$parameter[\"User\"]}}')"
						}
					}
				},
				{
					"name": "Me Chats All Messages",
					"value": "Me Chats All Messages",
					"action": "Invoke function allMessages",
					"description": "Invoke function allMessages",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/microsoft.graph.allMessages()"
						}
					}
				},
				{
					"name": "Me Chats Get All Messages",
					"value": "Me Chats Get All Messages",
					"action": "Invoke function getAllMessages",
					"description": "Invoke function getAllMessages",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/microsoft.graph.getAllMessages()"
						}
					}
				},
				{
					"name": "Me Chats Chat Messages Delta",
					"value": "Me Chats Chat Messages Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Chats Chat Messages Chat Message Replies Delta",
					"value": "Me Chats Chat Messages Chat Message Replies Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Cloud P Cs Cloud PC Get Cloud Pc Connectivity History",
					"value": "Me Cloud P Cs Cloud PC Get Cloud Pc Connectivity History",
					"action": "Invoke function getCloudPcConnectivityHistory",
					"description": "Invoke function getCloudPcConnectivityHistory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.getCloudPcConnectivityHistory()"
						}
					}
				},
				{
					"name": "Me Cloud P Cs Cloud PC Get Cloud Pc Launch Info",
					"value": "Me Cloud P Cs Cloud PC Get Cloud Pc Launch Info",
					"action": "Invoke function getCloudPcLaunchInfo",
					"description": "Invoke function getCloudPcLaunchInfo",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.getCloudPcLaunchInfo()"
						}
					}
				},
				{
					"name": "Me Cloud P Cs Cloud PC Get Shift Work Cloud Pc Access State",
					"value": "Me Cloud P Cs Cloud PC Get Shift Work Cloud Pc Access State",
					"action": "Invoke function getShiftWorkCloudPcAccessState",
					"description": "Invoke function getShiftWorkCloudPcAccessState",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.getShiftWorkCloudPcAccessState()"
						}
					}
				},
				{
					"name": "Me Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions",
					"value": "Me Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions",
					"action": "Invoke function getSupportedCloudPcRemoteActions",
					"description": "Invoke function getSupportedCloudPcRemoteActions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/cloudPCs/{{$parameter[\"cloudPC-id\"]}}/microsoft.graph.getSupportedCloudPcRemoteActions()"
						}
					}
				},
				{
					"name": "Me Contact Folders Delta",
					"value": "Me Contact Folders Delta",
					"action": "Invoke function delta",
					"description": "Get a set of contact folders that have been added, deleted, or removed from the user's mailbox. A **delta** function call for contact folders in a mailbox is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, \nyou can query for incremental changes in the contact folders. This allows you to maintain and synchronize \na local store of a user's contact folders without having to fetch all the contact folders of that mailbox from the server every time.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Contact Folders Contact Folder Child Folders Delta",
					"value": "Me Contact Folders Contact Folder Child Folders Delta",
					"action": "Invoke function delta",
					"description": "Get a set of contact folders that have been added, deleted, or removed from the user's mailbox. A **delta** function call for contact folders in a mailbox is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, \nyou can query for incremental changes in the contact folders. This allows you to maintain and synchronize \na local store of a user's contact folders without having to fetch all the contact folders of that mailbox from the server every time.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta",
					"value": "Me Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta",
					"action": "Invoke function delta",
					"description": "Get a set of contacts that have been added, deleted, or updated in a specified folder. A **delta** function call for contacts in a folder is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, \nyou can query for incremental changes in the contacts in \nthat folder. This allows you to maintain and synchronize a local store of a user's contacts without \nhaving to fetch the entire set of contacts from the server every time.  ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/childFolders/{{$parameter[\"contactFolder-id1\"]}}/contacts/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Contact Folders Contact Folder Contacts Delta",
					"value": "Me Contact Folders Contact Folder Contacts Delta",
					"action": "Invoke function delta",
					"description": "Get a set of contacts that have been added, deleted, or updated in a specified folder. A **delta** function call for contacts in a folder is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, \nyou can query for incremental changes in the contacts in \nthat folder. This allows you to maintain and synchronize a local store of a user's contacts without \nhaving to fetch the entire set of contacts from the server every time.  ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contactFolders/{{$parameter[\"contactFolder-id\"]}}/contacts/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Contacts Delta",
					"value": "Me Contacts Delta",
					"action": "Invoke function delta",
					"description": "Get a set of contacts that have been added, deleted, or updated in a specified folder. A **delta** function call for contacts in a folder is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, \nyou can query for incremental changes in the contacts in \nthat folder. This allows you to maintain and synchronize a local store of a user's contacts without \nhaving to fetch the entire set of contacts from the server every time.  ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/contacts/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Devices Delta",
					"value": "Me Devices Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/devices/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Events Delta",
					"value": "Me Events Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/events/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Events Event Exception Occurrences Delta",
					"value": "Me Events Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Events Event Exception Occurrences Event Instances Delta",
					"value": "Me Events Event Exception Occurrences Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/events/{{$parameter[\"event-id\"]}}/exceptionOccurrences/{{$parameter[\"event-id1\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Events Event Instances Delta",
					"value": "Me Events Event Instances Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/events/{{$parameter[\"event-id\"]}}/instances/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Events Event Instances Event Exception Occurrences Delta",
					"value": "Me Events Event Instances Event Exception Occurrences Delta",
					"action": "Invoke function delta",
					"description": "Get a set of event resources that have been added, deleted, or updated in one or more calendars.  You can get specific types of these incremental changes in the events in all the calendars of a mailbox or in a specific calendar, or in an event collection of a **calendarView** (range of events defined by start and end dates) of a calendar. The calendar can be the default calendar or some other specified calendar of the user's. In the case of getting incremental changes on **calendarView**, the calendar can be a group calendar as well. Typically, synchronizing events in a calendar or **calendarView** in a local store entails a round of multiple **delta** function calls. The initial call is a full synchronization, and every subsequent **delta** call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendar, without having to fetch all the events of that calendar from the server every time. The following table lists the differences between the **delta** function on events and the **delta** function on a **calendarView** in a calendar.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/events/{{$parameter[\"event-id\"]}}/instances/{{$parameter[\"event-id1\"]}}/exceptionOccurrences/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Joined Groups Delta",
					"value": "Me Joined Groups Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/joinedGroups/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Mail Folders Delta",
					"value": "Me Mail Folders Delta",
					"action": "Invoke function delta",
					"description": "Get a set of mail folders that have been added, deleted, or removed from the user's mailbox. A **delta** function call for mail folders in a mailbox is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, \nyou can query for incremental changes in the mail folders. This allows you to maintain and synchronize \na local store of a user's mail folders without having to fetch all the mail folders of that mailbox from the server every time.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Mail Folders Mail Folder Child Folders Delta",
					"value": "Me Mail Folders Mail Folder Child Folders Delta",
					"action": "Invoke function delta",
					"description": "Get a set of mail folders that have been added, deleted, or removed from the user's mailbox. A **delta** function call for mail folders in a mailbox is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, \nyou can query for incremental changes in the mail folders. This allows you to maintain and synchronize \na local store of a user's mail folders without having to fetch all the mail folders of that mailbox from the server every time.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Mail Folders Mail Folder Child Folders Mail Folder Messages Delta",
					"value": "Me Mail Folders Mail Folder Child Folders Mail Folder Messages Delta",
					"action": "Invoke function delta",
					"description": "Get a set of messages that have been added, deleted, or updated in a specified folder. A **delta** function call for messages in a folder is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, you can [query for incremental changes in the messages in \nthat folder](/graph/delta-query-messages). This allows you to maintain and synchronize a local store of a user's messages without \nhaving to fetch the entire set of messages from the server every time.  ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/childFolders/{{$parameter[\"mailFolder-id1\"]}}/messages/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Mail Folders Mail Folder Messages Delta",
					"value": "Me Mail Folders Mail Folder Messages Delta",
					"action": "Invoke function delta",
					"description": "Get a set of messages that have been added, deleted, or updated in a specified folder. A **delta** function call for messages in a folder is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, you can [query for incremental changes in the messages in \nthat folder](/graph/delta-query-messages). This allows you to maintain and synchronize a local store of a user's messages without \nhaving to fetch the entire set of messages from the server every time.  ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mailFolders/{{$parameter[\"mailFolder-id\"]}}/messages/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Managed Devices App Diagnostics",
					"value": "Me Managed Devices App Diagnostics",
					"action": "Invoke function appDiagnostics",
					"description": "Invoke function appDiagnostics",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/microsoft.graph.appDiagnostics(upn='{{$parameter[\"upn\"]}}')"
						}
					}
				},
				{
					"name": "Me Managed Devices Managed Device Get Cloud Pc Remote Action Results",
					"value": "Me Managed Devices Managed Device Get Cloud Pc Remote Action Results",
					"action": "Invoke function getCloudPcRemoteActionResults",
					"description": "Invoke function getCloudPcRemoteActionResults",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getCloudPcRemoteActionResults()"
						}
					}
				},
				{
					"name": "Me Managed Devices Managed Device Get Cloud Pc Review Status",
					"value": "Me Managed Devices Managed Device Get Cloud Pc Review Status",
					"action": "Invoke function getCloudPcReviewStatus",
					"description": "Invoke function getCloudPcReviewStatus",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getCloudPcReviewStatus()"
						}
					}
				},
				{
					"name": "Me Managed Devices Managed Device Get File Vault Key",
					"value": "Me Managed Devices Managed Device Get File Vault Key",
					"action": "Invoke function getFileVaultKey",
					"description": "Invoke function getFileVaultKey",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getFileVaultKey()"
						}
					}
				},
				{
					"name": "Me Managed Devices Managed Device Get Non Compliant Settings",
					"value": "Me Managed Devices Managed Device Get Non Compliant Settings",
					"action": "Invoke function getNonCompliantSettings",
					"description": "Invoke function getNonCompliantSettings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getNonCompliantSettings()"
						}
					}
				},
				{
					"name": "Me Managed Devices Managed Device Get Oem Warranty",
					"value": "Me Managed Devices Managed Device Get Oem Warranty",
					"action": "Invoke function getOemWarranty",
					"description": "Invoke function getOemWarranty",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.getOemWarranty()"
						}
					}
				},
				{
					"name": "Me Managed Devices Managed Device Retrieve Remote Help Session",
					"value": "Me Managed Devices Managed Device Retrieve Remote Help Session",
					"action": "Invoke function retrieveRemoteHelpSession",
					"description": "Invoke function retrieveRemoteHelpSession",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/managedDevices/{{$parameter[\"managedDevice-id\"]}}/microsoft.graph.retrieveRemoteHelpSession(sessionKey='{{$parameter[\"sessionKey\"]}}')"
						}
					}
				},
				{
					"name": "Me Messages Delta",
					"value": "Me Messages Delta",
					"action": "Invoke function delta",
					"description": "Get a set of messages that have been added, deleted, or updated in a specified folder. A **delta** function call for messages in a folder is similar to a GET request, except that by appropriately \napplying state tokens in one or more of these calls, you can [query for incremental changes in the messages in \nthat folder](/graph/delta-query-messages). This allows you to maintain and synchronize a local store of a user's messages without \nhaving to fetch the entire set of messages from the server every time.  ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/messages/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Export Device And App Management Data D 390",
					"value": "Me Export Device And App Management Data D 390",
					"action": "Invoke function exportDeviceAndAppManagementData",
					"description": "Invoke function exportDeviceAndAppManagementData",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/microsoft.graph.exportDeviceAndAppManagementData()"
						}
					}
				},
				{
					"name": "Me Export Device And App Management Data 623 C",
					"value": "Me Export Device And App Management Data 623 C",
					"action": "Invoke function exportDeviceAndAppManagementData",
					"description": "Invoke function exportDeviceAndAppManagementData",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/microsoft.graph.exportDeviceAndAppManagementData(skip={{$parameter[\"skip\"]}},top={{$parameter[\"top\"]}})"
						}
					}
				},
				{
					"name": "Me Find Room Lists",
					"value": "Me Find Room Lists",
					"action": "Invoke function findRoomLists",
					"description": "Get the room lists defined in a tenant, as represented by their emailAddress objects. Tenants can organize meeting rooms into room lists. In this API, each meeting room and room list is represented by an emailAddress instance.\nYou can get all the room lists in the tenant, get all the rooms in the tenant, or get all the rooms in a specific room list.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/microsoft.graph.findRoomLists()"
						}
					}
				},
				{
					"name": "Me Find Rooms D 266",
					"value": "Me Find Rooms D 266",
					"action": "Invoke function findRooms",
					"description": "Invoke function findRooms",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/microsoft.graph.findRooms()"
						}
					}
				},
				{
					"name": "Me Find Rooms 31 Ef",
					"value": "Me Find Rooms 31 Ef",
					"action": "Invoke function findRooms",
					"description": "Invoke function findRooms",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/microsoft.graph.findRooms(RoomList='{{$parameter[\"RoomList\"]}}')"
						}
					}
				},
				{
					"name": "Me Get Effective Device Enrollment Configurations",
					"value": "Me Get Effective Device Enrollment Configurations",
					"action": "Invoke function getEffectiveDeviceEnrollmentConfigurations",
					"description": "Invoke function getEffectiveDeviceEnrollmentConfigurations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/microsoft.graph.getEffectiveDeviceEnrollmentConfigurations()"
						}
					}
				},
				{
					"name": "Me Get Logged On Managed Devices",
					"value": "Me Get Logged On Managed Devices",
					"action": "Invoke function getLoggedOnManagedDevices",
					"description": "Invoke function getLoggedOnManagedDevices",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/microsoft.graph.getLoggedOnManagedDevices()"
						}
					}
				},
				{
					"name": "Me Get Managed App Diagnostic Statuses",
					"value": "Me Get Managed App Diagnostic Statuses",
					"action": "Invoke function getManagedAppDiagnosticStatuses",
					"description": "Gets diagnostics validation status for a given user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/microsoft.graph.getManagedAppDiagnosticStatuses()"
						}
					}
				},
				{
					"name": "Me Get Managed App Policies",
					"value": "Me Get Managed App Policies",
					"action": "Invoke function getManagedAppPolicies",
					"description": "Gets app restrictions for a given user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/microsoft.graph.getManagedAppPolicies()"
						}
					}
				},
				{
					"name": "Me Get Managed Devices With App Failures",
					"value": "Me Get Managed Devices With App Failures",
					"action": "Invoke function getManagedDevicesWithAppFailures",
					"description": "Retrieves the list of devices with failed apps",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/microsoft.graph.getManagedDevicesWithAppFailures()"
						}
					}
				},
				{
					"name": "Me Get Managed Devices With Failed Or Pending Apps",
					"value": "Me Get Managed Devices With Failed Or Pending Apps",
					"action": "Invoke function getManagedDevicesWithFailedOrPendingApps",
					"description": "Retrieves the list of devices with failed or pending apps",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/microsoft.graph.getManagedDevicesWithFailedOrPendingApps()"
						}
					}
				},
				{
					"name": "Me Is Managed App User Blocked",
					"value": "Me Is Managed App User Blocked",
					"action": "Invoke function isManagedAppUserBlocked",
					"description": "Gets the blocked state of a managed app user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/microsoft.graph.isManagedAppUserBlocked()"
						}
					}
				},
				{
					"name": "Me Reminder View",
					"value": "Me Reminder View",
					"action": "Invoke function reminderView",
					"description": "Invoke function reminderView",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/microsoft.graph.reminderView(StartDateTime='{{$parameter[\"StartDateTime\"]}}',EndDateTime='{{$parameter[\"EndDateTime\"]}}')"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Get Recent Notebooks",
					"value": "Me Onenote Notebooks Get Recent Notebooks",
					"action": "Invoke function getRecentNotebooks",
					"description": "Invoke function getRecentNotebooks",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/microsoft.graph.getRecentNotebooks(includePersonalNotebooks={{$parameter[\"includePersonalNotebooks\"]}})"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview",
					"value": "Me Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview",
					"action": "Invoke function preview",
					"description": "Invoke function preview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.preview()"
						}
					}
				},
				{
					"name": "Me Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Preview",
					"value": "Me Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Preview",
					"action": "Invoke function preview",
					"description": "Invoke function preview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/notebooks/{{$parameter[\"notebook-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.preview()"
						}
					}
				},
				{
					"name": "Me Onenote Pages Onenote Page Preview",
					"value": "Me Onenote Pages Onenote Page Preview",
					"action": "Invoke function preview",
					"description": "Invoke function preview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.preview()"
						}
					}
				},
				{
					"name": "Me Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview",
					"value": "Me Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview",
					"action": "Invoke function preview",
					"description": "Invoke function preview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sectionGroups/{{$parameter[\"sectionGroup-id\"]}}/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.preview()"
						}
					}
				},
				{
					"name": "Me Onenote Sections Onenote Section Pages Onenote Page Preview",
					"value": "Me Onenote Sections Onenote Section Pages Onenote Page Preview",
					"action": "Invoke function preview",
					"description": "Invoke function preview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/onenote/sections/{{$parameter[\"onenoteSection-id\"]}}/pages/{{$parameter[\"onenotePage-id\"]}}/microsoft.graph.preview()"
						}
					}
				},
				{
					"name": "Me Outlook Supported Languages",
					"value": "Me Outlook Supported Languages",
					"action": "Invoke function supportedLanguages",
					"description": "Get the list of locales and languages that are supported for the user, as configured on the user's mailbox server. When setting up an Outlook client, the user selects the preferred language from this supported list. You can subsequently get the preferred language by \ngetting the user's mailbox settings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/outlook/microsoft.graph.supportedLanguages()"
						}
					}
				},
				{
					"name": "Me Outlook Supported Time Zones Ee 48",
					"value": "Me Outlook Supported Time Zones Ee 48",
					"action": "Invoke function supportedTimeZones",
					"description": "Invoke function supportedTimeZones",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/outlook/microsoft.graph.supportedTimeZones()"
						}
					}
				},
				{
					"name": "Me Outlook Supported Time Zones 69 Ec",
					"value": "Me Outlook Supported Time Zones 69 Ec",
					"action": "Invoke function supportedTimeZones",
					"description": "Invoke function supportedTimeZones",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/outlook/microsoft.graph.supportedTimeZones(TimeZoneStandard='{{$parameter[\"TimeZoneStandard\"]}}')"
						}
					}
				},
				{
					"name": "Me Pending Access Review Instances Filter By Current User",
					"value": "Me Pending Access Review Instances Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/pendingAccessReviewInstances/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Me Pending Access Review Instances Access Review Instance Decisions Filter By Current User",
					"value": "Me Pending Access Review Instances Access Review Instance Decisions Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User",
					"value": "Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User",
					"value": "Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Me Pending Access Review Instances Access Review Instance Stages Filter By Current User",
					"value": "Me Pending Access Review Instances Access Review Instance Stages Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User",
					"value": "Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User",
					"value": "Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User",
					"action": "Invoke function filterByCurrentUser",
					"description": "Invoke function filterByCurrentUser",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/microsoft.graph.filterByCurrentUser(on='{{$parameter[\"on\"]}}')"
						}
					}
				},
				{
					"name": "Me Planner All Delta",
					"value": "Me Planner All Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/planner/all/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Todo Lists Delta",
					"value": "Me Todo Lists Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "Me Todo Lists Todo Task List Tasks Delta",
					"value": "Me Todo Lists Todo Task List Tasks Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/todo/lists/{{$parameter[\"todoTaskList-id\"]}}/tasks/microsoft.graph.delta()"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/activities/microsoft.graph.recent()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Activities Recent"
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
						"Me Functions"
					],
					"operation": [
						"Me Activities Recent"
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
						"Me Functions"
					],
					"operation": [
						"Me Activities Recent"
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
						"Me Functions"
					],
					"operation": [
						"Me Activities Recent"
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
						"Me Functions"
					],
					"operation": [
						"Me Activities Recent"
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
						"Me Functions"
					],
					"operation": [
						"Me Activities Recent"
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
						"Me Functions"
					],
					"operation": [
						"Me Activities Recent"
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
						"Me Functions"
					],
					"operation": [
						"Me Activities Recent"
					]
				}
			}
		},
		{
			"displayName": "GET /me/appConsentRequestsForApproval/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/appConsentRequestsForApproval/{appConsentRequest-id}/userConsentRequests/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me App Consent Requests For Approval App Consent Request User Consent Requests Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/approvals/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Approvals Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "target",
			"type": "options",
			"options": [
				{
					"name": "Target",
					"value": "target"
				},
				{
					"name": "Created By",
					"value": "createdBy"
				},
				{
					"name": "Approver",
					"value": "approver"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Approvals Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Approvals Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Approvals Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Approvals Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Approvals Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Approvals Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Approvals Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Approvals Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendar/calendarView/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendar/calendarView/{event-id}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendar/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Exception Occurrences Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendar/calendarView/{event-id}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendar/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Calendar View Event Instances Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendar/events/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendar/events/{event-id}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendar/events/{event-id}/exceptionOccurrences/{event-id1}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Exception Occurrences Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendar/events/{event-id}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendar/events/{event-id}/instances/{event-id1}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Events Event Instances Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendar/microsoft.graph.allowedCalendarSharingRoles(User='{User}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Allowed Calendar Sharing Roles"
					]
				}
			}
		},
		{
			"displayName": "User",
			"name": "User",
			"required": true,
			"description": "Usage: User='{User}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Allowed Calendar Sharing Roles"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Allowed Calendar Sharing Roles"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Allowed Calendar Sharing Roles"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Allowed Calendar Sharing Roles"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Allowed Calendar Sharing Roles"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Allowed Calendar Sharing Roles"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/microsoft.graph.allowedCalendarSharingRoles(User='{User}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles"
					]
				}
			}
		},
		{
			"displayName": "User",
			"name": "User",
			"required": true,
			"description": "Usage: User='{User}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar Groups Calendar Group Calendars Calendar Allowed Calendar Sharing Roles"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendarView/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendarView/{event-id}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Exception Occurrences Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendarView/{event-id}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendar View Event Instances Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendars/{calendar-id}/calendarView/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendars/{calendar-id}/calendarView/{event-id}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendars/{calendar-id}/calendarView/{event-id}/exceptionOccurrences/{event-id1}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Exception Occurrences Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendars/{calendar-id}/calendarView/{event-id}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Calendar View Event Instances Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendars/{calendar-id}/events/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendars/{calendar-id}/events/{event-id}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendars/{calendar-id}/events/{event-id}/exceptionOccurrences/{event-id1}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Exception Occurrences Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendars/{calendar-id}/events/{event-id}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendars/{calendar-id}/events/{event-id}/instances/{event-id1}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Events Event Instances Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/calendars/{calendar-id}/microsoft.graph.allowedCalendarSharingRoles(User='{User}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Allowed Calendar Sharing Roles"
					]
				}
			}
		},
		{
			"displayName": "User",
			"name": "User",
			"required": true,
			"description": "Usage: User='{User}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Allowed Calendar Sharing Roles"
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
						"Me Functions"
					],
					"operation": [
						"Me Calendars Calendar Allowed Calendar Sharing Roles"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/microsoft.graph.allMessages()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Chats All Messages"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats All Messages"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats All Messages"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats All Messages"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats All Messages"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats All Messages"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats All Messages"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats All Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/microsoft.graph.getAllMessages()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Chats Get All Messages"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Get All Messages"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Get All Messages"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Get All Messages"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Get All Messages"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Get All Messages"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Get All Messages"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Get All Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/messages/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Chats Chat Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Chat Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Chat Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Chat Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Chat Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Chat Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Chat Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Chat Messages Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Chats Chat Messages Chat Message Replies Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Chat Messages Chat Message Replies Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Chat Messages Chat Message Replies Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Chat Messages Chat Message Replies Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Chat Messages Chat Message Replies Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Chat Messages Chat Message Replies Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Chat Messages Chat Message Replies Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Chats Chat Messages Chat Message Replies Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/cloudPCs/{cloudPC-id}/microsoft.graph.getCloudPcConnectivityHistory()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
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
						"Me Functions"
					],
					"operation": [
						"Me Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
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
						"Me Functions"
					],
					"operation": [
						"Me Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
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
						"Me Functions"
					],
					"operation": [
						"Me Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
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
						"Me Functions"
					],
					"operation": [
						"Me Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
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
						"Me Functions"
					],
					"operation": [
						"Me Cloud P Cs Cloud PC Get Cloud Pc Connectivity History"
					]
				}
			}
		},
		{
			"displayName": "GET /me/cloudPCs/{cloudPC-id}/microsoft.graph.getCloudPcLaunchInfo()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Cloud P Cs Cloud PC Get Cloud Pc Launch Info"
					]
				}
			}
		},
		{
			"displayName": "GET /me/cloudPCs/{cloudPC-id}/microsoft.graph.getShiftWorkCloudPcAccessState()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Cloud P Cs Cloud PC Get Shift Work Cloud Pc Access State"
					]
				}
			}
		},
		{
			"displayName": "GET /me/cloudPCs/{cloudPC-id}/microsoft.graph.getSupportedCloudPcRemoteActions()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
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
						"Me Functions"
					],
					"operation": [
						"Me Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
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
						"Me Functions"
					],
					"operation": [
						"Me Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
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
						"Me Functions"
					],
					"operation": [
						"Me Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
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
						"Me Functions"
					],
					"operation": [
						"Me Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
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
						"Me Functions"
					],
					"operation": [
						"Me Cloud P Cs Cloud PC Get Supported Cloud Pc Remote Actions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Child Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Child Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Child Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Child Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Child Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Child Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Child Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Child Folders Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/childFolders/{contactFolder-id1}/contacts/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Child Folders Contact Folder Contacts Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contactFolders/{contactFolder-id}/contacts/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contact Folders Contact Folder Contacts Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/contacts/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contacts Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Contacts Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/devices/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Devices Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Devices Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Devices Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Devices Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Devices Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Devices Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Devices Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Devices Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/events/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/events/{event-id}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/events/{event-id}/exceptionOccurrences/{event-id1}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Exception Occurrences Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Exception Occurrences Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/events/{event-id}/instances/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Instances Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Instances Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/events/{event-id}/instances/{event-id1}/exceptionOccurrences/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Instances Event Exception Occurrences Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Events Event Instances Event Exception Occurrences Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/joinedGroups/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Joined Groups Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Joined Groups Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Joined Groups Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Joined Groups Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Joined Groups Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Joined Groups Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Joined Groups Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Joined Groups Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Child Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Child Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Child Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Child Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Child Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Child Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Child Folders Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Child Folders Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Child Folders Mail Folder Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Child Folders Mail Folder Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Child Folders Mail Folder Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Child Folders Mail Folder Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Child Folders Mail Folder Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Child Folders Mail Folder Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Child Folders Mail Folder Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Child Folders Mail Folder Messages Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mailFolders/{mailFolder-id}/messages/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Mail Folders Mail Folder Messages Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/microsoft.graph.appDiagnostics(upn='{upn}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "Upn",
			"name": "upn",
			"required": true,
			"description": "Usage: upn='{upn}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices App Diagnostics"
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
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices App Diagnostics"
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
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices App Diagnostics"
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
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices App Diagnostics"
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
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices App Diagnostics"
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
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices App Diagnostics"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/microsoft.graph.getCloudPcRemoteActionResults()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices Managed Device Get Cloud Pc Remote Action Results"
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
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices Managed Device Get Cloud Pc Remote Action Results"
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
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices Managed Device Get Cloud Pc Remote Action Results"
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
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices Managed Device Get Cloud Pc Remote Action Results"
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
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices Managed Device Get Cloud Pc Remote Action Results"
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
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices Managed Device Get Cloud Pc Remote Action Results"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/microsoft.graph.getCloudPcReviewStatus()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices Managed Device Get Cloud Pc Review Status"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/microsoft.graph.getFileVaultKey()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices Managed Device Get File Vault Key"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/microsoft.graph.getNonCompliantSettings()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices Managed Device Get Non Compliant Settings"
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
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices Managed Device Get Non Compliant Settings"
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
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices Managed Device Get Non Compliant Settings"
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
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices Managed Device Get Non Compliant Settings"
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
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices Managed Device Get Non Compliant Settings"
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
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices Managed Device Get Non Compliant Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/microsoft.graph.getOemWarranty()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices Managed Device Get Oem Warranty"
					]
				}
			}
		},
		{
			"displayName": "GET /me/managedDevices/{managedDevice-id}/microsoft.graph.retrieveRemoteHelpSession(sessionKey='{sessionKey}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices Managed Device Retrieve Remote Help Session"
					]
				}
			}
		},
		{
			"displayName": "Session Key",
			"name": "sessionKey",
			"required": true,
			"description": "Usage: sessionKey='{sessionKey}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Managed Devices Managed Device Retrieve Remote Help Session"
					]
				}
			}
		},
		{
			"displayName": "GET /me/messages/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Messages Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Messages Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/microsoft.graph.exportDeviceAndAppManagementData()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Export Device And App Management Data D 390"
					]
				}
			}
		},
		{
			"displayName": "GET /me/microsoft.graph.exportDeviceAndAppManagementData(skip={skip},top={top})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Export Device And App Management Data 623 C"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "skip",
			"required": true,
			"description": "Usage: skip={skip}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Export Device And App Management Data 623 C"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"required": true,
			"description": "Usage: top={top}",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Export Device And App Management Data 623 C"
					]
				}
			}
		},
		{
			"displayName": "GET /me/microsoft.graph.findRoomLists()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Find Room Lists"
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
						"Me Functions"
					],
					"operation": [
						"Me Find Room Lists"
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
						"Me Functions"
					],
					"operation": [
						"Me Find Room Lists"
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
						"Me Functions"
					],
					"operation": [
						"Me Find Room Lists"
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
						"Me Functions"
					],
					"operation": [
						"Me Find Room Lists"
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
						"Me Functions"
					],
					"operation": [
						"Me Find Room Lists"
					]
				}
			}
		},
		{
			"displayName": "GET /me/microsoft.graph.findRooms()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Find Rooms D 266"
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
						"Me Functions"
					],
					"operation": [
						"Me Find Rooms D 266"
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
						"Me Functions"
					],
					"operation": [
						"Me Find Rooms D 266"
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
						"Me Functions"
					],
					"operation": [
						"Me Find Rooms D 266"
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
						"Me Functions"
					],
					"operation": [
						"Me Find Rooms D 266"
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
						"Me Functions"
					],
					"operation": [
						"Me Find Rooms D 266"
					]
				}
			}
		},
		{
			"displayName": "GET /me/microsoft.graph.findRooms(RoomList='{RoomList}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Find Rooms 31 Ef"
					]
				}
			}
		},
		{
			"displayName": "Room List",
			"name": "RoomList",
			"required": true,
			"description": "Usage: RoomList='{RoomList}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Find Rooms 31 Ef"
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
						"Me Functions"
					],
					"operation": [
						"Me Find Rooms 31 Ef"
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
						"Me Functions"
					],
					"operation": [
						"Me Find Rooms 31 Ef"
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
						"Me Functions"
					],
					"operation": [
						"Me Find Rooms 31 Ef"
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
						"Me Functions"
					],
					"operation": [
						"Me Find Rooms 31 Ef"
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
						"Me Functions"
					],
					"operation": [
						"Me Find Rooms 31 Ef"
					]
				}
			}
		},
		{
			"displayName": "GET /me/microsoft.graph.getEffectiveDeviceEnrollmentConfigurations()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Get Effective Device Enrollment Configurations"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Effective Device Enrollment Configurations"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Effective Device Enrollment Configurations"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Effective Device Enrollment Configurations"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Effective Device Enrollment Configurations"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Effective Device Enrollment Configurations"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Effective Device Enrollment Configurations"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Effective Device Enrollment Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /me/microsoft.graph.getLoggedOnManagedDevices()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Get Logged On Managed Devices"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Logged On Managed Devices"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Logged On Managed Devices"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Logged On Managed Devices"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Logged On Managed Devices"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Logged On Managed Devices"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Logged On Managed Devices"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Logged On Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /me/microsoft.graph.getManagedAppDiagnosticStatuses()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Get Managed App Diagnostic Statuses"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed App Diagnostic Statuses"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed App Diagnostic Statuses"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed App Diagnostic Statuses"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed App Diagnostic Statuses"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed App Diagnostic Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /me/microsoft.graph.getManagedAppPolicies()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Get Managed App Policies"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed App Policies"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed App Policies"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed App Policies"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed App Policies"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed App Policies"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed App Policies"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed App Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /me/microsoft.graph.getManagedDevicesWithAppFailures()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Get Managed Devices With App Failures"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed Devices With App Failures"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed Devices With App Failures"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed Devices With App Failures"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed Devices With App Failures"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed Devices With App Failures"
					]
				}
			}
		},
		{
			"displayName": "GET /me/microsoft.graph.getManagedDevicesWithFailedOrPendingApps()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Get Managed Devices With Failed Or Pending Apps"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed Devices With Failed Or Pending Apps"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed Devices With Failed Or Pending Apps"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed Devices With Failed Or Pending Apps"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed Devices With Failed Or Pending Apps"
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
						"Me Functions"
					],
					"operation": [
						"Me Get Managed Devices With Failed Or Pending Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /me/microsoft.graph.isManagedAppUserBlocked()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Is Managed App User Blocked"
					]
				}
			}
		},
		{
			"displayName": "GET /me/microsoft.graph.reminderView(StartDateTime='{StartDateTime}',EndDateTime='{EndDateTime}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Reminder View"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "StartDateTime",
			"required": true,
			"description": "Usage: StartDateTime='{StartDateTime}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Reminder View"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "EndDateTime",
			"required": true,
			"description": "Usage: EndDateTime='{EndDateTime}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Reminder View"
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
						"Me Functions"
					],
					"operation": [
						"Me Reminder View"
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
						"Me Functions"
					],
					"operation": [
						"Me Reminder View"
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
						"Me Functions"
					],
					"operation": [
						"Me Reminder View"
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
						"Me Functions"
					],
					"operation": [
						"Me Reminder View"
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
						"Me Functions"
					],
					"operation": [
						"Me Reminder View"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/microsoft.graph.getRecentNotebooks(includePersonalNotebooks={includePersonalNotebooks})",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Onenote Notebooks Get Recent Notebooks"
					]
				}
			}
		},
		{
			"displayName": "Include Personal Notebooks",
			"name": "includePersonalNotebooks",
			"required": true,
			"description": "Usage: includePersonalNotebooks={includePersonalNotebooks}",
			"default": false,
			"type": "boolean",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Onenote Notebooks Get Recent Notebooks"
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
						"Me Functions"
					],
					"operation": [
						"Me Onenote Notebooks Get Recent Notebooks"
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
						"Me Functions"
					],
					"operation": [
						"Me Onenote Notebooks Get Recent Notebooks"
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
						"Me Functions"
					],
					"operation": [
						"Me Onenote Notebooks Get Recent Notebooks"
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
						"Me Functions"
					],
					"operation": [
						"Me Onenote Notebooks Get Recent Notebooks"
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
						"Me Functions"
					],
					"operation": [
						"Me Onenote Notebooks Get Recent Notebooks"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.preview()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Onenote Notebooks Notebook Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/notebooks/{notebook-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.preview()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Onenote Notebooks Notebook Sections Onenote Section Pages Onenote Page Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/pages/{onenotePage-id}/microsoft.graph.preview()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Onenote Pages Onenote Page Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sectionGroups/{sectionGroup-id}/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.preview()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Onenote Section Groups Section Group Sections Onenote Section Pages Onenote Page Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/microsoft.graph.preview()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Onenote Sections Onenote Section Pages Onenote Page Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /me/outlook/microsoft.graph.supportedLanguages()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Languages"
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
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Languages"
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
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Languages"
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
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Languages"
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
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Languages"
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
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Languages"
					]
				}
			}
		},
		{
			"displayName": "GET /me/outlook/microsoft.graph.supportedTimeZones()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Time Zones Ee 48"
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
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Time Zones Ee 48"
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
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Time Zones Ee 48"
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
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Time Zones Ee 48"
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
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Time Zones Ee 48"
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
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Time Zones Ee 48"
					]
				}
			}
		},
		{
			"displayName": "GET /me/outlook/microsoft.graph.supportedTimeZones(TimeZoneStandard='{TimeZoneStandard}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Time Zones 69 Ec"
					]
				}
			}
		},
		{
			"displayName": "Time Zone Standard",
			"name": "TimeZoneStandard",
			"required": true,
			"description": "Usage: TimeZoneStandard='{TimeZoneStandard}'",
			"default": "windows",
			"type": "options",
			"options": [
				{
					"name": "Windows",
					"value": "windows"
				},
				{
					"name": "Iana",
					"value": "iana"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Time Zones 69 Ec"
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
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Time Zones 69 Ec"
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
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Time Zones 69 Ec"
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
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Time Zones 69 Ec"
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
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Time Zones 69 Ec"
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
						"Me Functions"
					],
					"operation": [
						"Me Outlook Supported Time Zones 69 Ec"
					]
				}
			}
		},
		{
			"displayName": "GET /me/pendingAccessReviewInstances/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Decisions Access Review Instance Decision Item Instance Stages Access Review Stage Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/microsoft.graph.filterByCurrentUser(on='{on}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "On",
			"name": "on",
			"required": true,
			"description": "Usage: on='{on}'",
			"default": "reviewer",
			"type": "options",
			"options": [
				{
					"name": "Reviewer",
					"value": "reviewer"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
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
						"Me Functions"
					],
					"operation": [
						"Me Pending Access Review Instances Access Review Instance Stages Access Review Stage Decisions Access Review Instance Decision Item Instance Decisions Filter By Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/planner/all/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Planner All Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Planner All Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Planner All Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Planner All Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Planner All Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Planner All Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Planner All Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Planner All Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Todo Lists Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Todo Lists Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Todo Lists Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Todo Lists Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Todo Lists Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Todo Lists Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Todo Lists Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Todo Lists Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /me/todo/lists/{todoTaskList-id}/tasks/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Functions"
					],
					"operation": [
						"Me Todo Lists Todo Task List Tasks Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Todo Lists Todo Task List Tasks Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Todo Lists Todo Task List Tasks Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Todo Lists Todo Task List Tasks Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Todo Lists Todo Task List Tasks Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Todo Lists Todo Task List Tasks Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Todo Lists Todo Task List Tasks Delta"
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
						"Me Functions"
					],
					"operation": [
						"Me Todo Lists Todo Task List Tasks Delta"
					]
				}
			}
		},
];
